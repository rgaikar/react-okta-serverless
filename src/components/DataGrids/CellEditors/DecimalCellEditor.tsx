import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const KEY_BACKSPACE = "Backspace";
const KEY_DELETE = "Delete";
const KEY_F2 = "F2";
const KEY_ENTER = "Enter";
const KEY_TAB = "Tab";

type Props = {
  children?: React.ReactNode;
  keyPress?: any;
  charPress: string;
  value?: any;
  stopEditing: () => void;
};

type Ref = {
  getValue: () => any;
  isCancelBeforeStart: (value: any) => void;
  isCancelAfterEnd: (value: any) => void;
};

export default memo(
  forwardRef<Ref, Props>((props, ref) => {
    const createInitialState = () => {
      let startValue;
      let isHighlightAllOnFocus = true;

      if (props.keyPress === KEY_BACKSPACE || props.keyPress === KEY_DELETE) {
        // if backspace or delete pressed, we clear the cell
        startValue = "";
      } else if (props.charPress) {
        // if a letter was pressed, we start with the letter
        startValue = props.charPress;
        isHighlightAllOnFocus = false;
      } else {
        // otherwise we start with the current value
        startValue = props.value;
        if (props.keyPress === KEY_F2) {
          isHighlightAllOnFocus = false;
        }
      }

      return {
        value: startValue,
        highlightAllOnFocus: isHighlightAllOnFocus,
      };
    };

    const initialState = createInitialState();
    const [value, setValue] = useState(initialState.value);
    const [highlightAllOnFocus, setHighlightAllOnFocus] = useState(
      initialState.highlightAllOnFocus
    );
    const refInput = useRef(null);

    // focus on the input
    useEffect(() => {
      // get ref from React component
      const eInput: any = refInput.current;
      eInput.focus();
      if (highlightAllOnFocus) {
        eInput.select();

        setHighlightAllOnFocus(false);
      } else {
        // when we started editing, we want the caret at the end, not the start.
        // this comes into play in two scenarios:
        //   a) when user hits F2
        //   b) when user hits a printable character
        const length = eInput.value ? eInput.value.length : 0;
        if (length > 0) {
          eInput.setSelectionRange(length, length);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* Utility Methods */
    const cancelBeforeStart =
      props.charPress && "1234567890".indexOf(props.charPress) < 0;

    const isLeftOrRight = (event: any) => {
      return ["ArrowLeft", "ArrowLeft"].indexOf(event.key) > -1;
    };

    const isCharDecimal = (charStr: any) => {
      return !!/\./.test(charStr) && !/\./.test(value);
    };

    const isCharNumeric = (charStr: any) => {
      return !!/\d/.test(charStr);
    };

    const isStringDecimal = (_value: any) => {
      return /^\d+\.\d{0,2}$/.test(_value);
    };

    const isStringNumeric = (_value: any) => {
      return /^\d+$/.test(_value);
    };

    const isKeyPressedNumeric = (event: any) => {
      const charStr = event.key;
      return isCharNumeric(charStr) || isCharDecimal(charStr);
    };

    const deleteOrBackspace = (event: any) => {
      return [KEY_DELETE, KEY_BACKSPACE].indexOf(event.key) > -1;
    };

    const isCopyOrPaste = (event: any) => {
      return ["Control", "Meta", "c", "v", "a", "x"].indexOf(event.key) > -1;
    };

    const finishedEditingPressed = (event: any) => {
      const key = event.key;
      return key === KEY_ENTER || key === KEY_TAB;
    };

    const onKeyDown = (event: any) => {
      if (
        isLeftOrRight(event) ||
        deleteOrBackspace(event) ||
        isCopyOrPaste(event)
      ) {
        event.stopPropagation();
        return;
      }

      if (!finishedEditingPressed(event) && !isKeyPressedNumeric(event)) {
        if (event.preventDefault) event.preventDefault();
      }

      if (finishedEditingPressed(event)) {
        props?.stopEditing();
      }

      if (event.target.value >= 999999999.99) event.preventDefault();
    };

    /* Component Editor Lifecycle methods */
    useImperativeHandle(ref, () => {
      return {
        // the final value to send to the grid, on completion of editing
        getValue() {
          return value ? value : 0;
        },

        // Gets called once before editing starts, to give editor a chance to
        // cancel the editing before it even starts.
        isCancelBeforeStart() {
          return cancelBeforeStart;
        },

        // Gets called once when editing is finished (eg if Enter is pressed).
        // If you return true, then the result of the edit will be ignored.
        isCancelAfterEnd() {
          // will reject the number if it greater than 1,000,000
          // not very practical, but demonstrates the method.
          return value > 999999999.99;
        },
      };
    });

    return (
      <input
        ref={refInput}
        value={value}
        onChange={(event) => {
          const newValue = event.target.value;
          if (
            newValue &&
            (parseFloat(newValue) > 999999999.99 ||
              (!isStringDecimal(newValue) && !isStringNumeric(newValue)))
          ) {
            event.preventDefault();
          } else setValue(newValue);
        }}
        onKeyDown={(event) => onKeyDown(event)}
        style={{ width: "100%" }}
      />
    );
  })
);
