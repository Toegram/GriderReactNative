import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import yelp from './api/yelp';

const ResultsShowScreen = ({ navigation }) => {
	const [result, setResult] = useState(null);
	const id = navigation.getParam('id');

	const getResults = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResults(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<View>
			<Text style={styles.resultText}>{result.name}</Text>
			<FlatList
				horizontal
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image source={{ uri: item }} style={styles.resultImage} />;
				}}
			/>
		</View>
	);
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
	resultImage: {
		height: 200,
		width: 300,
	},
	resultText: {
		fontSize: 30,
		alignItems: 'center',
	},
});
