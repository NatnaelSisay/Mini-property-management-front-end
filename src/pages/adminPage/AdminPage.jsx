import { useState, useRef } from "react";
import PropType from "prop-types";

import Nav from "../../components/Nav";
import UserInfo from "../../components/UserInfo";
import BasicSelectComponent from "../../components/BasicSelectComponent";

import Button from "@mui/material/Button";

import "./AdminPage.css";

const AdminPage = () => {
	const [user, setUser] = useState(mock_user);
	const [owners, setOwners] = useState(mockOwners);
	const [users, setUsers] = useState(mockCustomers);

	const [state, setState] = useState("");
	const [role, setRole] = useState("");

	function handleFilter(e) {
		e.preventDefault();
		console.log("status, role => ", state, role);
	}

	return (
		<div>
			<Nav user={user} />
			<div className="container flex-center">
				<form className="filter-fields center-vertical" onSubmit={handleFilter}>
					<div className="margin-1rem">
						<BasicSelectComponent
							name="Status"
							options={["All", "ACTIVE", "BLOCKED"]}
							value={state}
							setValue={setState}
						/>
					</div>
					<div className="margin-1rem">
						<BasicSelectComponent
							name="Role"
							options={["All", "OWNER", "USER"]}
							value={role}
							setValue={setRole}
						/>
					</div>
					<Button type="submit">filter</Button>
				</form>
			</div>

			<div className="container">
				<div>
					<h2>Owners</h2>
					<UserInfo users={owners} />
				</div>
				<div>
					<h2>Users</h2>
					<UserInfo users={users} />
				</div>
			</div>
		</div>
	);
};

const mock_user = {
	role: "ADMIN",
};

const mockOwners = [{ name: "java", email: "test@gmail.com", role: "OWNER" }];
const mockCustomers = [
	{ name: "java", email: "test@gmail.com", role: "CUSTOMER" },
];
export default AdminPage;
