import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import PropTypes from "prop-types";
import { Box } from "@mui/material";

export default function UserInfo({ users, onApprove, onBlock }) {
  return (
    users && (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">UserType</TableCell>
              <TableCell align="left">STATUS</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.firstName + " " + row.lastName}
                </TableCell>
                {/* <TableCell align="right">{row.name}</TableCell> */}
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.role}</TableCell>
                <TableCell align="left">{row.accountStatus}</TableCell>
                <TableCell align="center">
                  {row.role === "OWNER" && (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      {row.accountStatus != "ACTIVE" && (
                        <Button
                          variant="contained"
                          onClick={() => onApprove(row.id)}
                        >
                          APPROVE
                        </Button>
                      )}
                      {row.accountStatus !== "BLOCKED" && (
                        <Button
                          variant="contained"
                          onClick={() => onBlock(row.id)}
                        >
                          BLOCK
                        </Button>
                      )}
                    </Box>
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
