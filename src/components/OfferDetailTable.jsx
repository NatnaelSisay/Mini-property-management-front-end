import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function OfferDetailTable({ offers }) {
	return (
		offers && (
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">Amount</TableCell>
							<TableCell align="right">Status</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{offers.map((offer, index) => {
							return (
								<TableRow key={index}>
									<TableCell component="th">
										{offer.customer.firstName}
									</TableCell>
									<TableCell align="right">{offer.offerPrice}</TableCell>
									<TableCell align="right">{offer.offerStatus}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		)
	);
}

export default OfferDetailTable;
