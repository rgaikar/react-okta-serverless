import { Box, Avatar } from "@mui/material";

// Type Definitions
type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
};

// Component
export default function MUIAvatar(props: AvatarProps) {
  return (
    <Box
      sx={{
        width: 55,
        height: 55,
        borderRadius: "50%",
        p: 0.1,
        border: "1px solid #E89287",
        display: "flex",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Avatar data-testid="avatar-info" src={props?.src} alt={props.alt} sx={{ width: 54, height: 54 }} />
    </Box>
  );
}
