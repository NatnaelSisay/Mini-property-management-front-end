export const mockOffer = {
	id: 1,
	offerPrice: 121212,
	offerStatus: "PENDING",
	customer: {
		firstName: "Java",
	},
	// property: mockProperty,
};

export const mockProperty = {
	price: 123,
	image:
		"https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
	address: {
		street: "4th",
		city: "Fairfield",
		state: "Iowa",
		zip: 52557,
	},
	offers: [mockOffer, mockOffer],
	// owner: mockUser,
	area: 23,
	numberOfBedRooms: 2,
	numberOfBathRooms: 2,
	numberOfFloors: 1,
	yearBuilt: 1999,
	description:
		"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
	propertyType: "APARTMENT",
	propertyStatus: "AVAILABLE",
};

export const mockUser = {
	id: 1,
	firstName: "test",
	lastName: "test",
	role: "OWNER", // ADMIN, USER
	email: "test@test.com",
	accountStatus: "ACTIVE", //PENDING, ACTIVE, BLOCKED
	properties: [
		mockProperty,
		mockProperty,
		mockProperty,
		mockProperty,
		mockProperty,
	],
	offers: [mockOffer, mockOffer],
};
