import React, { useState } from 'react';
import './farmerregistations.css'; // Ensure the correct path to the CSS file
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { brown } from '@mui/material/colors';

function Farmerregistration() {
  const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <div className='all'>
      {/* Left column - Farmer registration form */}
      <div className='registration-left'>
        <h1 className='farmerregistation'>Farmer Registration</h1>
        
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '100%' },
            padding: 0, /* Remove any padding */
            margin: 0, /* Ensure no margin */
            width: '100%',
          }}
          noValidate
          autoComplete="off"

        >
          <div className="form-field">
            <TextField id="name" label="Enter your name" variant="filled" fullWidth />
          </div>
          <div className="form-field">
            <TextField id="nic" label="NIC Number" variant="filled" fullWidth />
          </div>
          <div className="form-field">
            <TextField id="mobile" label="Mobile Number" variant="filled" fullWidth />
          </div>
          <div className="form-field">
            <TextField id="address" label="Address" variant="filled" fullWidth />
          </div>
          <div className="form-field">
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <div>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </div>
                
              </RadioGroup>
            </FormControl>
          </div>
          
        </Box>
      </div>

      {/* Right column - Farmer ID section */}
      <div className='registration-right'>
      <h2 className='farmerid'>Farmer ID</h2>
      <div className="farmer-id-number"></div>
        <Button
      component="label"
      className='poto-upload-btn'
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload your poto
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
}

export default Farmerregistration;
