import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { clearSignupError, resetSignupStatus, selectLoggedInUser, selectSignupError, selectSignupStatus, signupAsync } from '../../../redux/auth/AuthSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';





export default function SignUp() {

  const dispatch = useDispatch();
  const status = useSelector(selectSignupStatus);
  const error = useSelector(selectSignupError);
  const loggedInUser = useSelector(selectLoggedInUser);

  const navigate = useNavigate();
  React.useEffect(() => {
    if (loggedInUser) {
      navigate("/dash");
    }
  }, [loggedInUser,navigate]);

    const [user, setUser] = React.useState({
      name: '',
      gender: '',
      age: '',
      username: '',
      lastname: '',
      email: '',
      password: '',
      isWorker: false,
  
    });
  
    const handleChange = (e) => {
      const { name, value, checked } = e.target;
      setUser(prevUser => ({
        ...prevUser,
        [name]: name === 'isWorker' ? checked : value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(signupAsync({user}))
      
   
    };
  
  // handles login error and toast them
  React.useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  // handles login status and dispatches reset actions to relevant states in cleanup
  React.useEffect(() => {
    if (status === "fulfilled") {
      toast.success(`sinUp successful`);
 
      navigate("/Login");

      
      setUser({
        name: '',
        gender: '',
        age: '',
        username: '',
        lastname: '',
        email: '',
        password: '',
        isWorker: false,
        
     });  
    }
    return () => {
      dispatch(resetSignupStatus());
      dispatch(clearSignupError());
    };
  }, [status,dispatch,navigate]);









  

  return (

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="family-name"
            name="name"
            required
            fullWidth
            value={user.name}
            onChange={handleChange}
            id="name"
            label=" Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="family-name"
            name="lastname"
            required
            fullWidth
            value={user.lastname}
            onChange={handleChange}
            id="lastname"
            label="Last Name"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            autoComplete="family-name"
            name="password"
            required
            fullWidth
            type='password'
            value={user.password}
            onChange={handleChange}
            id="password"
            label="password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            name="age"
            fullWidth
            value={user.age}
            onChange={handleChange}
            id="age"
            label="Age"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="username"
            fullWidth
            value={user.username}
            onChange={handleChange}
            id="username"
            label="Username"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="email"
            name="email"
            required
            fullWidth
            value={user.email}
            onChange={handleChange}
            id="email"
            label="Email"
          />
        </Grid>



        <Grid item xs={12}>
       
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" value={user.gender} onChange={handleChange}>
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
     
        </Grid>
        </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
  
      </Container>

  );
}