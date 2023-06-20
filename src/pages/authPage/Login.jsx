import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import BasicSelectComponent from "../../components/BasicSelectComponent";
import { Typography } from "@mui/material";

const Login = () => {
	const userDetail = useRef();
	const [role, setRole] = useState("");

	function handleSignup(e) {
		e.preventDefault();
		console.log(userDetail);
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
