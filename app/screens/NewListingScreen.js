import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import SuccessScreen from "../screens/SuccessScreen";

import CategoryPickerItem from "../components/pickers/CategoryPickerItem";
import Form from "../components/forms/Form";
import FormInputWithError from "../components/inputs/FormInputWithError";
import ImagePickerWithError from "../components/pickers/ImagePickerWithError";
import PickerWithError from "../components/pickers/PickerWithError";
import SubmitButton from "../components/buttons/SubmitButton";
import TitleText from "../components/texts/TitleText";

import categories from "../config/categories";
import colors from "../config/colors";
import listings from "../api/controllers/listings.controller";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).label("Price"),
	category: Yup.object().required().nullable().label("Category"),
	description: Yup.string().required().label("Description"),
	city: Yup.string().required().min(1).label("City"),
	images: Yup.array().required().min(1, "Please select at least one image"),
});

const NewListingScreen = () => {
	const [successVisible, setSuccessVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (listing, { resetForm }) => {
		setProgress(0);
		setSuccessVisible(true);
		const res = await listings.addListing(listing, (progress) =>
			setProgress(progress)
		);
		setSuccessVisible(false);

		if (!res.ok) {
			console.log(res.data);
			return alert("Something went wrong. Could not save the listing.");
		}

		alert("Listing saved.");
		resetForm();
	};

	return (
		<Form
			initialValues={{
				title: "",
				price: "",
				category: null,
				description: "",
				city: "",
				images: [],
			}}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<SuccessScreen progress={progress} visible={successVisible} />
			<StatusBar backgroundColor={colors.white} barStyle="dark-content" />
			<View style={{ flex: 1 }}>
				<TitleText style={styles.title}>New Listing</TitleText>
				<ScrollView showsVerticalScrollIndicator={false}>
					<ImagePickerWithError name="images" />
					<FormInputWithError
						placeholder="Title "
						icon="create"
						name="title"
						maxLength={255}
					/>
					<FormInputWithError
						placeholder="Price "
						icon="attach-money"
						keyboardType="decimal-pad"
						name="price"
					/>
					<PickerWithError
						name="category"
						placeholder="Category "
						icon="apps"
						items={categories}
						numberOfColumns={3}
						PickerItemComponent={CategoryPickerItem}
					/>
					<FormInputWithError
						placeholder="Description "
						icon="subtitles"
						name="description"
						multiline
						numberOfLines={5}
					/>
					<FormInputWithError
						placeholder="City "
						icon="location-on"
						name="city"
					/>
					<SubmitButton
						title="Save"
						style={{ width: "90%", top: 10, marginBottom: 20 }}
					/>
				</ScrollView>
			</View>
		</Form>
	);
};

const styles = StyleSheet.create({
	title: {
		paddingTop: 30,
		paddingBottom: 20,
		left: 30,
	},
});

export default NewListingScreen;
