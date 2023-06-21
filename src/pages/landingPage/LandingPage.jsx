import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./LandingPage.css";

import Nav from "../../components/Nav";
import PropertyCard from "../../components/PropertyCard";
import { mockProperty } from "../../utils/mockData";

// MATERIAL-UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LandingPage = () => {
	const filter = useRef();
	const [properties, setProperties] = useState(Array(5).fill(mockProperty));
	const user = useSelector((state) => state.auth.value);

	function handleFilter(e) {
		e.preventDefault();
		const { minPrice } = filter.current;
		console.log("minPrice: " + minPrice.value);
		console.log(filter);
	}

	return (
		<div>
			<Nav user={user} />
			{/* filter */}
			<div className="container">
				<form
					className="filter-fields center-vertical"
					ref={filter}
					onSubmit={handleFilter}
				>
					<TextField
						id="outlined-basic"
						label="MinPrice"
						variant="outlined"
						name="minPrice"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
					/>
					<TextField
						id="outlined-basic"
						label="MaxPrice"
						variant="outlined"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
					/>
					<TextField
						id="outlined-basic"
						label="BedRooms"
						variant="outlined"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
					/>
					<TextField
						id="outlined-basic"
						label="BathRooms"
						variant="outlined"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
					/>
					<TextField id="outlined-basic" label="ZipCode" variant="outlined" />
					<TextField id="outlined-basic" label="City" variant="outlined" />
					<TextField id="outlined-basic" label="State" variant="outlined" />
					<Button variant="contained" type="submit">
						Fitler
					</Button>
				</form>
			</div>

			<div className="container flex-wrap">
				<Properties properties={properties} />
			</div>
		</div>
	);
};

const Properties = ({ properties }) => {
	return properties.map((property, index) => {
		return (
			<div key={index} className="property-card">
				<Link to={`/property/${index}`}>
					<PropertyCard property={property} />
				</Link>
			</div>
		);
	});
};

export default LandingPage;
