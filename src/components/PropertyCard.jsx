import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Favorite from "@mui/icons-material/Favorite";

export default function PropertyCard(props) {
	return (
		<Card variant="outlined" sx={{ width: 400, margin: 3 }}>
			<CardOverflow>
				<AspectRatio ratio="2">
					<img
						src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
						srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
						loading="lazy"
						alt=""
						// {props.image}
					/>
				</AspectRatio>
				<IconButton
					aria-label="Like minimal photography"
					size="md"
					// variant="solid"
					//onClick change the variant to solid
					variant="solid"
					color="danger"
					sx={{
						position: "absolute",
						zIndex: 2,
						borderRadius: "50%",
						right: "1rem",
						bottom: 0,
						transform: "translateY(50%)",
					}}
				>
					<Favorite />
				</IconButton>
			</CardOverflow>
			<CardContent>
				<Typography level="h1" fontSize="25px">
					$1,200,000
					{/* {props.price} */}
				</Typography>
			</CardContent>

			<CardContent orientation="horizontal">
				<Typography level="body2" fontSize="18px" sx={{ mt: 0.8 }}>
					3 bedroom
					{/* {props.bedroom} */}
				</Typography>
				<Divider orientation="vertical" />
				<Typography level="body2" fontSize="18px" sx={{ mt: 0.8 }}>
					2 bathroom
					{/* {props.bathroom} */}
				</Typography>
				<Divider orientation="vertical" />
				<Typography level="body2" fontSize="18px" sx={{ mt: 0.8 }}>
					1,400 sqft
					{/* {props.sqft} */}
				</Typography>
				<Divider orientation="vertical" />
				<Typography level="body2" fontSize="18px" sx={{ mt: 0.8 }}>
					2 floors
					{/* {props.floors} */}
				</Typography>
			</CardContent>

			<CardContent>
				<Typography
					level="body2"
					fontSize="16px"
					fontWeight="bold"
					sx={{ mt: 0.7 }}
				>
					1234 Main St, San Francisco, CA 94122
					{/* {props.address.street} , {props.address.city} , {props.address.state} , {props.address.zipcode} */}
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
						2 weeks ago
						{/* {props.date} */}
					</Typography>
				</CardContent>
			</CardOverflow>
		</Card>
	);
}
