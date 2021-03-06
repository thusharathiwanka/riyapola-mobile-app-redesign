import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Feather, Octicons, AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import Card from "../components/cards/Card";
import ParagraphText from "../components/texts/ParagraphText";
import SearchCard from "../components/cards/SearchCard";
import TopicText from "../components/texts/TopicText";
import TitleText from "../components/texts/TitleText";
import useFetch from "../hooks/useFetch";
import listings from "../api/controllers/listings.controller";

const Search = ({navigation}) => {
	
	const [SearchText, setSearchText] = useState("");
	const [ItemList, setItemList] = useState([])
	
	const {
		data: latestListings,
		error,
		getData: getLatestListings,
	} = useFetch(listings.getListings);

	useEffect(() => {
		getLatestListings(latestListings);
		setItemList()
	}, []);
	
	const searchItems = (text) =>{

	}
	return (
		<View style={styles.background}>
			<View style={styles.topic}>
				<TitleText children={"Search"} />
			</View>
			<View style={styles.searchView}>
				<View style={styles.inputs}>
					<TextInput onChange={(e)=>{setSearchText(e.target.value);}} style={styles.searchInput} placeholder="Search" />
					<Feather
						name="search"
						size={24}
						color={colors.textPrimary}
						style={styles.searchIcon}
					/>
				</View>
				<TouchableOpacity onPress={()=>navigation.navigate("Filter")}>
				<View style={styles.filter}>
					<Octicons
						name="settings"
						style={styles.filterIcon}
						size={26}
						color="white"
					/>
				</View>
				</TouchableOpacity>
			</View>
			<ScrollView style={styles.scrollView}> 
					{ !error ? (
					<View style={styles.cardContainer}>
						{latestListings.map((latestListing) => (
						// (SearchText.length !== 0) ?( 	latestListing.title.toLowerCase().includes(SearchText.toLowerCase()) && (
							<Card
								key={latestListing.id}
								image={latestListing.images[0].url}
								title={latestListing.title}
								price={latestListing.price}
								seller="Thushara"
								date={new Date().toDateString()}
								onPress={()=>navigation.navigate("SingleItem", latestListing)}
							/>
						// )):(<Card
						// 		key={latestListing.id}
						// 		image={latestListing.images[0].url}
						// 		title={latestListing.title}
						// 		price={latestListing.price}
						// 		seller="Thushara"
						// 		date={new Date().toDateString()}
						// 		onPress={()=>navigation.navigate("SingleItem", latestListing)}
						// 	/>)
							))}
					</View>
				) : (
					<ParagraphText style={{ fontSize: 20, paddingHorizontal: 28 }}>
						Something went wrong.
					</ParagraphText>
				)}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	arrowIcon: {
		position: "absolute",
		top: "-8.5%",
		left: "4%",
	},
	topic: {
		alignSelf: "center",
		top: -75,
	},
	background: {
		marginTop: "20%",
	},
	inputs: {
		justifyContent: "center",
		color: colors.secondary,
		width: "60%",
		height: 40,
		backgroundColor: colors.secondary,
		borderRadius: 8,
		padding: "3%",
		paddingLeft: "10%",
		alignSelf: "center",
		marginBottom: "5%",
	},
	searchInput: {
		color: colors.textPrimary,
	},
	searchIcon: {
		position: "absolute",
		left: "3.5%",
	},
	filter: {
		backgroundColor: colors.primary,
		width: 40,
		height: 40,
		marginLeft: 10,
		borderRadius: 8,
		
	},
	searchView: {
		flexDirection: "row",
		justifyContent: "center",
		top:"-13%"
	},
	filterIcon: {
		transform: [{ rotate: "90deg" }],
		left: 0,
		top: 14.5,
	},
	cardImage01: {
		width: "100%",
	},
	cardView: {
		width: "80%",
		height: 220,
		overflow: "hidden",
		alignSelf: "center",
		backgroundColor: colors.secondary,
		borderRadius: 8,
		marginTop: "5%",
	},
	image01: {
		width: "100%",
		resizeMode: "contain",
		bottom: 282,
	},
	priceView: {
		position: "absolute",
		elevation: 1,
		backgroundColor: "rgba(255,255,255, 0.6)	",
		top: "4%",
		left: "5%",
		paddingVertical: 2,
		paddingHorizontal: 8,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	priceText: {
		fontFamily: "poppins-medium",
		fontSize: 11,
		fontWeight: "500",
		color: "#304756",
	},
	nameText: {
		position: "absolute",
		color: colors.textPrimary,
		fontSize: 14,
		fontWeight: "500",
		fontWeight: "bold",
		left: "5%",
		top: "75%",
	},
	dateText: {
		position: "absolute",
		color: colors.textPrimary,
		fontSize: 10,
		fontWeight: "bold",
		left: "5%",
		top: "85%",
	},
	sellerText: {
		position: "absolute",
		color: colors.textPrimary,
		fontSize: 10,
		fontWeight: "bold",
		right: "5%",
		top: "80%",
	},
	cardContainer:{
		paddingHorizontal: 30,
		width: "100%",
		marginBottom: 200,
	},
	scrollView:{
		top:"-5%"
	}
});

export default Search;
