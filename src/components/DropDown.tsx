import { MenuItem, TextField } from "@mui/material";
import React, { ChangeEvent } from "react";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  // Add any other props you expect to receive
}

const DropDown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  setSelectedOption,
  ...props
}) => {
  const handleDropdownChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedOption(event.target.value as string);
  };

  return (
    <TextField
      id="standard-select-currency"
      select
      defaultValue={selectedOption}
      onChange={handleDropdownChange}
      variant="standard"
      InputProps={{
        disableUnderline: true,
        style: {
          fontSize: "22px",
        },
      }}
      {...props}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DropDown;
