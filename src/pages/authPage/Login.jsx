import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Auth.css";

import { addUser } from "../../redux/authSlice";
import { getSampleUser } from "../../utils/jwtUtils";

// MATERIAL-UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";
import { login } from "../../apis/authApis";

const Login = () => {
  const userDetail = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSignup(e) {
    e.preventDefault();
    console.log(userDetail);

    const formData = new FormData(userDetail.current);
    const data = Object.fromEntries(formData);

    login(data)
      .then((res) => {
        console.log("login res: ", res.data);
      })
      .catch((err) => {});

    // console.log("login data: ", data);
    // dispatch(addUser(getSampleUser()));
    // navigate("/");
  }

  return (
    <div className="all-center">
      <div className="auth-container box-shadow">
        <Typography level="h1" fontSize="25px">
          Login
        </Typography>
        <form ref={userDetail} onSubmit={handleSignup} className="auth-form">
          <TextField
            id="email"
            label="email"
            variant="outlined"
            name="email"
            className="auth-form-input"
          />
          <TextField
            id="password"
            label="password"
            variant="outlined"
            name="password"
            type="password"
            className="auth-form-input"
          />

          <div className="action-buttons">
            <Button type="submit" color="success" variant="contained">
              Login
            </Button>
            <Button color="error">
              <Link to="/signup"> Create an Account? </Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
