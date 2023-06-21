import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Auth.css";

import { addUser } from "../../redux/authSlice";
import { decodeToken } from "../../utils/jwtUtils";

// MATERIAL-UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";
import { login } from "../../apis/authApis";
import { getCookie, setCookie } from "../../utils/cookieUtil";

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
        setCookie("refreshToken", res.data.refreshToken);
        setCookie("accessToken", res.data.accessToken);
        dispatch(addUser(decodeToken(res.data.accessToken)));
        navigate("/");
      })
      .catch((err) => {});
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
