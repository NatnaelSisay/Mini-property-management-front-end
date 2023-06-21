import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeToken } from "../utils/jwtUtils";
import { removeUser } from "../redux/authSlice";

// - MATERIAL-UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export default function Nav() {
	const user = useSelector((state) => state.auth.value);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSignout() {
		removeToken();
		dispatch(removeUser());
	}

	function handleSignIn() {
		navigate("/login");
	}

	useEffect(() => {}, [user]);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: "#f44336" }}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					></IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						{" "}
						Mini-Home
					</Typography>
					{user && user.role === "OWNER" && (
						<Button color="inherit">sell</Button>
					)}
					{user ? (
						<Button color="inherit" onClick={() => handleSignout()}>
							Signout
						</Button>
					) : (
						<Button color="inherit" onClick={() => handleSignIn()}>
							Signin
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
