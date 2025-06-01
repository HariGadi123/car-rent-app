import * as React from "react";
import TextField from "@mui/material/TextField";

interface CustomTextFieldProps {
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  label?: string;
  value: string;
  name: string;
  type?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  error = false,
  helperText = "",
  placeholder = "",
  label = "",
  value,
  name,
  type = "text",
  onChange,
  required = false,
}) => {
  return (
    <TextField
      name={name}
      error={error}
      type={type}
      value={value}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth
      helperText={error ? helperText : ""}
      variant="outlined"
      required={required}
      sx={{
        "& label": {
          color: "#143f6b",
        },
        "& label.Mui-focused": {
          color: "#143f6b",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#143f6b",
          },
          "&:hover fieldset": {
            borderColor: "#143f6b",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#143f6b",
          },
        },
      }}
    />
  );
};

export default CustomTextField;
