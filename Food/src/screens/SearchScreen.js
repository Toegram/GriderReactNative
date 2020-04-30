import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Searchbar from './components/Searchbar';
// import yelp from './api/yelp';
import useResults from './hooks/useResults';
import ResultsList from './components/ResultsList';

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchAPI, results, errorMsg] = useResults();

	console.log(results);

	return (
		<View style={styles.containerStyle}>
			<Searchbar
				term={searchTerm}
				onTermChange={(newTerm) => setSearchTerm(newTerm)}
				onTermSubmit={() => searchAPI(searchTerm)}
			/>
			{errorMsg ? <Text> {errorMsg} </Text> : null}
			<Text> We have found {results.length} results </Text>
			<ResultsList title='Cost Effective' />
			<ResultsList title='Bit Pricier' />
			<ResultsList title='Big Spender' />
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: 'white',
	},
});

export default SearchScreen;
