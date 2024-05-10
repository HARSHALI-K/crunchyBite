// ReusableInput.jsx
"use client"
import * as React from 'react';
import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';

const RHFInput = ({ control, name,type="text",disabled=false, ...rest }) => {
  const {
    field: { value, onChange },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue: '',
  });

  return (
    <TextField
      value={value}
      type={type}
      onChange={onChange}
      sx={{height:"48px"}}
      error={invalid}
      disabled={disabled}
      helperText={error ? error.message : ''}
      rows={2}
      {...rest}
      InputProps={{
        sx:{
          borderRadius: '8px',
          border: 'none',
          backgroundColor:"white"
        }
    }}
    />
  );
};

export default RHFInput;
