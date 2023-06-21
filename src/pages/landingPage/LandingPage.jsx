import { useRef, useState, useEffect } from "react";
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
	const [properties, setProperties] = useState([]);
	const user = useSelector((state) => state.auth.value);

	function handleFilter(e) {
		e.preventDefault();
		const {
			minPrice,
			maxPrice,
			numberOfBedRooms,
			numberOfBathRooms,
			zipCode,
			city,
			state,
		} = filter.current;

		const data = {
			minPrice: Number(minPrice.value),
			maxPrice: maxPrice.value,
			bedRooms: numberOfBedRooms.value,
			bathRooms: numberOfBathRooms.value,
			zipCode: zipCode.value,
			city: city.value,
			state: state.value,
		};

		console.log("Filter data", data);
		// call the api and update the properties
		// GET /api/v1/properties data
		fetchData();
	}

	function fetchData() {
		setProperties(Array(5).fill(mockProperty));
	}

	useEffect(() => {
		console.log("useEffcect - Landing page");
		fetchData();
	}, []);

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
						id="minPrice"
						label="MinPrice"
						variant="outlined"
						name="minPrice"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
					/>
					<TextField
						id="maxPrice"
						label="MaxPrice"
						variant="outlined"
						name="maxPrice"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
					/>
					<TextField
						id="numberOfBedRooms"
						label="BedRooms"
						variant="outlined"
						name="numberOfBedRooms"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
					/>
					<TextField
						id="numberOfBathRooms"
						label="BathRooms"
						variant="outlined"
						name="numberOfBathRooms"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
					/>
					<TextField
						id="zipCode"
						label="ZipCode"
						variant="outlined"
						name="zipCode"
					/>
					<TextField id="city" label="City" variant="outlined" name="city" />
					<TextField id="state" label="State" variant="outlined" name="state" />
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
