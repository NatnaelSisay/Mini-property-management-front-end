import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function PropertyDetailTable(props) {
	const { property } = props || null;
	return (
		property && (
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Detail</TableCell>
							<TableCell align="right">Value</TableCell>
							{/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
						<TableCell align="right">Carbs&nbsp;(g)</TableCell>
						<TableCell align="right">Protein&nbsp;(g)</TableCell> */}
						</TableRow>
					</TableHead>

					<TableBody>
						<TableRow>
							<TableCell component="th">Price</TableCell>
							<TableCell align="right">{property.price}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th">Area</TableCell>
							<TableCell align="right">{property.area}</TableCell>
						</TableRow>

						<TableRow>
							<TableCell component="th">NumberOfBedRooms</TableCell>
							<TableCell align="right">{property.numberOfBedRooms}</TableCell>
						</TableRow>

						<TableRow>
							<TableCell component="th">numberOfBathRooms</TableCell>
							<TableCell align="right">{property.numberOfBathRooms}</TableCell>
						</TableRow>

						<TableRow>
							<TableCell component="th">NumberOfFloors</TableCell>
							<TableCell align="right">{property.numberOfFloors}</TableCell>
						</TableRow>

						<TableRow>
							<TableCell component="th">YearBuilt</TableCell>
							<TableCell align="right">{property.yearBuilt}</TableCell>
						</TableRow>

						<TableRow>
							<TableCell component="th">Type</TableCell>
							<TableCell align="right">{property.propertyType}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell component="th">Availability</TableCell>
							<TableCell align="right">{property.propertyStatus}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		)
	);
}

export default PropertyDetailTable;
