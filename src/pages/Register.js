import React, { useState } from "react";
import { Box, Button, Card, Divider, Snackbar, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import { useData } from "./DataContext";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({ pwd: false });
  const Navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const register = useData();

  function handleUsername(e) {
    setUserName(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleRegister(e) {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("userData") || "[]");
    const userData = {
      name: username,
      password: password,
    };
    data.push(userData);
    setOpen(true);
    setTimeout(() => {
      Navigate("/");
    }, 1500);

    localStorage.setItem("userData", JSON.stringify(data));

    setPassword(" ");
    setUserName(" ");
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    register.setOpen(false);
  };
  return (
    <Card
    sx={{
      width: 300,
      // height: auto,
      mx: 50,
      my: 5,
      p:1,
      backgroundColor: "white",
    }}
    >
      <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Box >
        <Typography variant="h6" sx={{fontWeight:"bold"}} >Sign Up</Typography>
        <Typography sx={{fontSize:"14px",color:"gray"}}>It's quick and easy</Typography>
          </Box>
          <Box>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>X</Link>
          </Box>
       
      </Box>
      <Divider />
      
<Box sx={{p:3}}>
<UsernameInput
        sx={{ mb: 2 }}
        onChange={handleUsername}
        value={username}
        onBlur={(e, error) => {
          setErrors((state) => ({ ...state, pwd: error }));
        }}
      />

      <TextField size="small" sx={{mb:2}} placeholder="Mobile number or email address" ></TextField>
      <PasswordInput
        value={password}
        onChange={handlePassword}
        onBlur={(e, error) => {
          setErrors((state) => ({ ...state, pwd: error }));
        }}
      />

<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={[ 'DatePicker', 'DatePicker']}>
       <Box sx={{display:"flex" ,gap:1}} >
       <Box sx={{width:100,}}>
       <DatePicker label={'day'} views={['day']} size="small" />
        
        </Box>
        <Box sx={{width:115,}}>
        <DatePicker label={'mo & yr'} views={['month', 'year']} />
        
        </Box>
       </Box>
      </DemoContainer>
    </LocalizationProvider>


      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Registered successfully now login
        </Alert>
      </Snackbar>

<Typography sx={{fontSize:"8px" ,color:"gray",mt:1}}>
  People whon use ourservice may have uploaded your contact information to Facebook.<a href="">Learn more.</a>
</Typography>
<Typography sx={{fontSize:"7px",mt:0.5,color:'gray'}}>
  By clicking Sign Up, you agree to our <a href="">Terms</a>,<a href="">Privacy Policy</a> and <a href="">Cookies Policy.</a> You may receive SMS notifications from us and can opt out at any time.
</Typography>
      <Button
        variant="contained"
        onClick={handleRegister}
        disabled={errors.pwd}
        sx={{backgroundColor:"#13cf13",
        fontWeight:"bold"
        ,ml:5,mt:1,mb:1}}
      >
        Sign Up
      </Button>
     
</Box>
     
    </Card>
  );
};

export default Register;
