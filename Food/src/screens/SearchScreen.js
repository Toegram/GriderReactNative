import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Searchbar from './components/Searchbar';
import yelp from './api/yelp';

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [results, setResults] = useState([]);
	const [errorMsg, setErrorMsg] = useState('');

	const searchAPI = async () => {
		try {
			const responce = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'Riverhead',
				},
			});
			setResults(responce.data.businesses);
		} catch (err) {
			setErrorMsg('Something Went Horribly Wrong');
		}
	};

	return (
		<View style={styles.containerStyle}>
			<Searchbar
				term={searchTerm}
				onTermChange={(newTerm) => setSearchTerm(newTerm)}
				onTermSubmit={() => searchAPI()}
			/>
			{errorMsg ? <Text> {errorMsg} </Text> : null}
			<Text> We have found {results.length} results </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: 'white',
	},
});

export default SearchScreen;
