import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./Auth.css";
import BasicSelectComponent from "../../components/BasicSelectComponent";
import { addUser } from "../../redux/authSlice";

// MATERIAL-UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { signUp } from "../../apis/authApis";
import { setCookie } from "../../utils/cookieUtil";
import { decodeToken } from "../../utils/jwtUtils";

const Signup = () => {
  const userDetail = useRef();
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  function handleSignup(e) {
    e.preventDefault();

    const formData = new FormData(userDetail.current);
    const data = Object.fromEntries(formData.entries());

    signUp(data)
      .then((res) => {
        setCookie("refreshToken", res.data.refreshToken);
        setCookie("accessToken", res.data.accessToken);
        dispatch(addUser(decodeToken(res.data.accessToken)));
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="all-center">
      <div className="auth-container box-shadow">
        <Typography level="h1" fontSize="25px">
          Sign up
        </Typography>
        <form ref={userDetail} onSubmit={handleSignup} className="auth-form">
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            name="firstName"
            className="auth-form-input"
          />

          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            name="lastName"
            className="auth-form-input"
          />

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
          <BasicSelectComponent
            id="role"
            name="role"
            options={["OWNER", "USER", "ADMIN"]}
            value={role}
            setValue={setRole}
          />
          <div className="action-buttons">
            <Button type="submit" color="success" variant="contained">
              Create Account
            </Button>
            <Button color="error">
              <Link to="/login" replace>
                {" "}
                Already have account?{" "}
              </Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
