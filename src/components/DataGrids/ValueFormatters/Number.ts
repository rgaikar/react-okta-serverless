const NumberFomatter = (params: any) => {
  if (params.value)
    return parseFloat(params.value).toLocaleString("en", {
      maximumFractionDigits: 2,
    });
  else return params.value;
};

const RoundedNumberFomatter = (params: any) => {
  if (params.value)
    return Math.round(params.value).toLocaleString("en", {
      maximumFractionDigits: 2,
    });
  else return params.value;
};

export { NumberFomatter, RoundedNumberFomatter };
