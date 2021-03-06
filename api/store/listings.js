const listings = [
	{
		id: 1,
		title: "Mustang 1969",
		description: "I'm selling my car",
		images: [{ fileName: "mustang-1969" }],
		price: 500000,
		categoryId: 1,
		userId: 1,
		city: "Gampaha",
	},
	{
		id: 2,
		title: "Audi RS6 Avant",
		description: "I'm selling my car",
		images: [{ fileName: "audi-rs6" }],
		categoryId: 1,
		price: 120000,
		userId: 2,
		city: "Colombo",
	},
	{
		id: 3,
		title: "Mustang 2018",
		description: "I'm selling my car",
		images: [{ fileName: "mustang-2018" }],
		price: 1000,
		categoryId: 1,
		userId: 1,
		city: "Colombo",
	},
	{
		id: 4,
		title: "Black Cap",
		images: [{ fileName: "black-caps" }],
		categoryId: 7,
		price: 100,
		userId: 2,
		city: "Gampaha",
	},
	{
		id: 5,
		title: "Denim Trousers",
		images: [{ fileName: "denim-trousers" }],
		price: 1300,
		categoryId: 7,
		userId: 1,
		city: "Gampaha",
	},
	{
		id: 6,
		title: "T Shirt",
		images: [{ fileName: "t-shirt" }],
		price: 650,
		categoryId: 7,
		userId: 1,
		city: "Gampaha",
	},
	{
		id: 7,
		title: "Sofa",
		description: "No rips no stains no odors",
		images: [{ fileName: "sofa" }],
		categoryId: 5,
		price: 11950,
		userId: 2,
		city: "Colombo",
	},
	{
		id: 8,
		title: "Mattress",
		images: [{ fileName: "bed" }],
		categoryId: 5,
		price: 5000,
		userId: 2,
		city: "Colombo",
	},
	{
		id: 9,
		title: "Learn Python",
		images: [{ fileName: "python-book" }],
		categoryId: 4,
		price: 500,
		userId: 2,
		city: "Colombo",
	},
	{
		id: 10,
		title: "Boxing Glouse",
		images: [{ fileName: "boxing-glouse" }],
		categoryId: 6,
		price: 5000,
		userId: 2,
		city: "Colombo",
	},
	{
		id: 11,
		title: "Basketll Ball",
		images: [{ fileName: "basketball" }],
		categoryId: 6,
		price: 5000,
		userId: 2,
		city: "Colombo",
	},
	{
		id: 12,
		title: "Tennis Ball",
		images: [{ fileName: "tennis-ball" }],
		categoryId: 6,
		price: 100,
		userId: 2,
		city: "Colombo",
	},
	{
		id: 13,
		title: "Luxury House",
		images: [{ fileName: "house" }],
		categoryId: 3,
		price: 100000,
		userId: 2,
		city: "Colombo",
	},
	{
		id: 14,
		title: "Country Land",
		images: [{ fileName: "land" }],
		categoryId: 3,
		price: 100,
		userId: 2,
		city: "Colombo",
	},
	{
		id: 15,
		title: "iPhone 11 Pro",
		images: [{ fileName: "iphone-11" }],
		categoryId: 2,
		price: 100000,
		userId: 2,
		city: "Colombo",
	},
	{
		id: 16,
		title: "iPad Pro",
		images: [{ fileName: "ipad" }],
		categoryId: 2,
		price: 150000,
		userId: 2,
		city: "Colombo",
	},
	{
		id: 17,
		title: "Macbook Pro",
		images: [{ fileName: "macbook" }],
		categoryId: 2,
		price: 175000,
		userId: 2,
		city: "Colombo",
	},
];

const addListing = (listing) => {
	listing.id = listings.length + 1;
	listings.unshift(listing);
};

const getListings = () => listings;

const getListingsOfCategory = (id) => {
	console.log(id);
	listings.filter((listings) => id === listings.categoryId);
};

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
	addListing,
	getListings,
	getListing,
	filterListings,
	getListingsOfCategory,
};
