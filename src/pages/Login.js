import React from "react";
import { Box, Button, Snackbar, Typography,Card, CardMedia } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { useAuth } from "../auth";
import MuiAlert from "@mui/material/Alert";
import PasswordInput from "./PasswordInput";
import UsernameInput from "./UsernameInput";
import { useData } from "./DataContext";
import Facebook from './images/facebooklogin.svg'
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const alertMsg = {
  error: {
    msg: "Register First !",
    severity: "error",
    key: "error",
  },
  empty: {
    msg: "Please fill the details",
    severity: "warning",
    key: "empty",
  },
  success: {
    msg: "Logged in successfully!",
    severity: "success",
    key: "success",
  },
};

const Login = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState({ pwd: false });
  // const [empty, setEmpty] = useState(false);
  // const auth = useAuth();
  const dataContext = useData();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);
  const Navigate = useNavigate();

  const [errorType, setErrorType] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    dataContext.login(name);
    if (name === "" || name === null) {
      // setEmpty(true);
      setErrorType(alertMsg.empty.key);
    }
    if (password === "") {
      // setEmpty(true);
      setErrorType(alertMsg.empty.key);
    }

    const data = JSON.parse(localStorage.getItem("userData") || "[]");
    if (data.length > 0) {
      const loginDetails = data.filter((detail) => {
        return detail.name === name && detail.password === password;
      });
      if (loginDetails.length > 0) {
        // setLoggedIn(true);
        setTimeout(() => {
          Navigate("/home");
        }, 1500);
        setErrorType(alertMsg.success.key);
      } else {
        // setError(true);
        setErrorType("error");
      }
    }
    setName(" ");
    setPassword(" ");
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    // setLoggedIn(false);
    // setError(false);
    setErrorType("");
  };

  return (
    <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
     <Box sx={{width:300,my:20}}>
<CardMedia component="img" src={Facebook} alt="facebook"  />
     </Box>
     <Box>
     <Card
        sx={{
          width: 250,
          height: 200,
          my: 10,
          padding: 10,
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h6"
          componnet="h6"
          sx={{ fontFamily: "monospace", mb: 2,ml:3 ,fontSize:"16px"}}
        >
          Log in to facebook
        </Typography>

        <UsernameInput
          sx={{ mb: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={(e, error) => {
            setErrors((state) => ({ ...state, pwd: error }));
          }}
        />

        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          onBlur={(e, error) => {
            setErrors((state) => ({ ...state, pwd: error }));
          }}
        />
        <MyAlert
          open={errorType}
          onClose={handleClose}
          msg={alertMsg[errorType]?.msg}
          severity={alertMsg[errorType]?.severity}
        />

        <Button variant="contained" sx={{width:220}} onClick={handleLogin}>
          Login
        </Button>
        <Box
          sx={{
            mt: 2,
            color:"blue",
            fontSize: "12px",
          }}
        >
          Forgotten account ? <Link to="/register">Sign up for facebook</Link>
        </Box>
      </Card>
     </Box>
    </Box>
  );
};

export default Login;

function MyAlert({ msg, onClose, open, severity }) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {msg}
      </Alert>
    </Snackbar>
  );
}
