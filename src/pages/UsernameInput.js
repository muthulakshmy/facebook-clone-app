import { FormControl, TextField, FormHelperText } from "@mui/material";
import React, { useState } from "react";
let errorMessage = {
  emptyField: "Please fill username",
  InvalidUsername:
    "Minimum length must be 8 and contain atleast one character ",
};
let usernameValidate = /^(?=.*[A-Za-z])[A-Za-z\d!@#$%^]{8,}$/;
const UsernameInput = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  function handleBlur(e) {
    const { value } = e.target;
    setValue(value);
    const usernameRegex = new RegExp(usernameValidate);
    setError(!usernameRegex.test(value));
    if (props.onBlur) {
      props?.onBlur?.(e, !usernameRegex.test(value));
    }
  }
  return (
    <div>
      <FormControl error={error} >
        <TextField
          // sx={{ width: 215 }}

          error={error}
          required
         placeholder="Username"

          {...props}
         
          onBlur={handleBlur}
          sx={error? {border:"1px solid red", width: 215 ,borderRadius:1}:{border:"1px solid green", width: 215 ,mb:2,borderRadius:1}}
          size="small"
        />

        {error && (
          <FormHelperText sx={{ width: 150 }}>
            {value ? errorMessage.InvalidUsername : errorMessage.emptyField}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
};

export default UsernameInput;
