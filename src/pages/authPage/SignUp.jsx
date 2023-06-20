import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import BasicSelectComponent from "../../components/BasicSelectComponent";
import { Typography } from "@mui/material";

const Signup = () => {
	const userDetail = useRef();
	const navigate = useNavigate();
	const [role, setRole] = useState("");

	function handleSignup(e) {
		e.preventDefault();

		const { firstName, lastName, email, password } = userDetail.current;

		const data = {
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			password: password.value,
			role: role,
		};

		console.log("user data : ", data);
		// send data to backend
		// save user to the golbal state
		navigate("/");
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
						name="Role"
						options={["OWNER", "USER", "ADMIN"]}
						value={role}
						setValue={setRole}
					/>
					<div className="action-buttons">
						<Button type="submit" color="success" variant="contained">
							Create Account
						</Button>
						<Button color="error">
							<Link to="/login"> Already have account? </Link>
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
