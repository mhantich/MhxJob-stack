import React, { useState } from 'react';
import {  TextField, Button, Box, Stack } from '@mui/material';



const EditProfilePage = () => {
  const user = 
    {
        name:'joe',email:'jsjfghf@gmail.com',passwor:'33333',
        role:'worker or user',
    }
  
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: '', // Assuming you have validation for not updating password here
    role: user.role,
    // availability: user.availability.join(', '), // Convert array to string for input display
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user information here (e.g., call API to update user)

  };

  return (
    <Box p={1} sx={{   height: { md: "100dvh" }}}  >
      <h1>Edit Profile</h1>
      
     <form  sx={{  '& .MuiTextField-root': {
      margin: '1rem',
      width: '90%',    
      display:'flex'
                         
    },}} onSubmit={handleSubmit}>

<Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          label="Availability (comma-separated dates)"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button></Stack>
      </form> 
    </Box>
  );
};

export default EditProfilePage;
