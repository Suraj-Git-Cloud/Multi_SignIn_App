import React, { useState } from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";


import {Box, Button,Checkbox,Container,FormControlLabel, Grid, Link, TextField, Typography,   } from '@mui/material';
import { GoogleLoginButton,  MicrosoftLoginButton, AppleLoginButton } from 'react-social-login-buttons';


   
   function LoginUser() {
    const [formValues, setFormValues] = useState({
     email: '',
     password: '',
    });

    const { instance } = useMsal();

    const getData = (e) => {
     const { value, name } = e.target;
     setFormValues(() => {
      return {
       ...formValues,
       [name]: value,
      };
     });
    }; 

   function handleSubmit(e) {
    
    }


    function googleAuthentication(e) {
      alert('Google sign in')
    }

    function handleMicrosoftLogin() {
      instance.loginRedirect(loginRequest).catch((e) => {
          console.log(e);
        });
    };
   
    return (
     <>
      <Container component="main" maxWidth="xs">
       <Box>
        <Typography component="h1" variant="h5">
         Sign In
        </Typography>
        <Box component="form">      
          <TextField
           margin="normal"
           required
           fullWidth
           id="email"
           type="email"
           label="Email Address"
           name="email"
           autoComplete="email"
           autoFocus
           onChange={getData}
          />
          <TextField
           margin="normal"
           required
           fullWidth
           name="password"
           label="Password"
           type="password"
           id="password"
           autoComplete="current-password"
           onChange={getData}
          />                        
         <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
         />
         <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}>
          Sign In
         </Button>
         <Grid>
          <Link href="">Forgot password?</Link>
         </Grid> 

         <br></br>

         <Grid
            container display="flex" justifyContent="center" alignItems="center" className="mb-3">   
            <GoogleLoginButton onClick={() => googleAuthentication} />
            <AppleLoginButton onClick={() => alert('Facebook sign in')} />
            <MicrosoftLoginButton onClick={() => handleMicrosoftLogin()} />    
        </Grid>    
        <br></br>

         <Grid className="footer">
          <Typography component="h5">
           Don't have an account? <Link href="">Sign Up</Link>
          </Typography>
         </Grid>
        </Box>
       </Box>
      </Container>
     </>
    );
   }
   
   export default LoginUser;