import * as React from "react";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  title?: string;
  onClick: (event: any) => void;
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title = "Save",
  onClick,
  loading = false,
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      loading={loading}
      sx={{
        color: "white",
        backgroundColor: "#143f6b",
      }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
