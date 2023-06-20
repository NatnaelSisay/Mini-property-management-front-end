import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import PropTypes from "prop-types";

export default function UserInfo({ users }) {
	return (
		users && (
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="left">Name</TableCell>
							<TableCell align="left">Email</TableCell>
							<TableCell align="left">UserType</TableCell>
							<TableCell align="center">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								{/* <TableCell align="right">{row.name}</TableCell> */}
								<TableCell align="left">{row.email}</TableCell>
								<TableCell align="left">{row.role}</TableCell>
								<TableCell align="center">
									{row.role === "OWNER" && (
										<Button variant="contained">Approved</Button>
									)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		)
	);
}

UserInfo.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			email: PropTypes.string.isRequired,
			role: PropTypes.string.isRequired,
		})
	),
};
