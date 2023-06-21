import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Favorite from "@mui/icons-material/Favorite";

export default function PropertyCard(props) {
	if (!props) return null;
	const { property } = props;
	return (
		<Card variant="outlined" sx={{ width: 400, margin: 3 }}>
			<CardOverflow>
				<AspectRatio ratio="2">
					<img src={property.image} loading="lazy" alt="" />
				</AspectRatio>
			</CardOverflow>
			<CardContent>
				<Typography level="h1" fontSize="25px">
					${property.price}
				</Typography>
			</CardContent>

			<CardContent orientation="horizontal">
				<Typography level="body2" fontSize="18px" sx={{ mt: 0.8 }}>
					{/* 3 bedroom */}
					{property.numberOfBedRooms}{" "}
					{property.numberOfBedRooms > 1 ? "bedrooms" : "bedroom"}
				</Typography>
				<Divider orientation="vertical" />
				<Typography level="body2" fontSize="18px" sx={{ mt: 0.8 }}>
					{/* 2 bathroom */}
					{property.numberOfBathRooms}{" "}
					{property.numberOfBathRooms > 1 ? "bathrooms" : "bathroom"}
				</Typography>
				<Divider orientation="vertical" />
				<Typography level="body2" fontSize="18px" sx={{ mt: 0.8 }}>
					{/* 1,400 sqft */}
					{property.area} sqft
				</Typography>
				<Divider orientation="vertical" />
				<Typography level="body2" fontSize="18px" sx={{ mt: 0.8 }}>
					{/* 2 floors */}
					{property.numberOfFloors}{" "}
					{property.numberOfFloors > 1 ? "floors" : "floor"}
				</Typography>
			</CardContent>

			<CardContent>
				<Typography
					level="body2"
					fontSize="16px"
					fontWeight="bold"
					sx={{ mt: 0.7 }}
				>
					{/* 1234 Main St, San Francisco, CA 94122 */}
					{property.address.street} , {property.address.city},
					{property.address.state} , {property.address.zipcode}
				</Typography>
				<Typography
					level="body2"
					fontSize="16px"
					fontWeight="bold"
					sx={{ mt: 0.5 }}
				>
					G+2 House
					{/* {props.type} */}
				</Typography>
			</CardContent>

			<CardOverflow>
				<Divider inset="context" />

				<CardContent>
					<Typography
						level="body3"
						sx={{ fontWeight: "md", color: "text.secondary" }}
					>
						{property.propertyType} | {property.propertyStatus}
					</Typography>
				</CardContent>
			</CardOverflow>
		</Card>
	);
}
