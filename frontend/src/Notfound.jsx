// NotFound.js
import React from 'react';
import { Container, Typography, Button, } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const history = useNavigate();

  const handleGoBack = () => {
    history('/');
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        color: 'secondary.main', // Using custom theme color
      }}
    >
      <Typography variant="h1" component="h1" sx={{ color: 'primary.main' }}>
        404
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you are looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleGoBack}
        sx={{ color: 'secondary.success' }} // Using custom theme color
      >
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFound;
