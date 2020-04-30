import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Searchbar from './components/Searchbar';
// import yelp from './api/yelp';
import useResults from './hooks/useResults';
import ResultsList from './components/ResultsList';

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchAPI, results, errorMsg] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<View style={styles.containerStyle}>
			<Searchbar
				term={searchTerm}
				onTermChange={(newTerm) => setSearchTerm(newTerm)}
				onTermSubmit={() => searchAPI(searchTerm)}
			/>
			{errorMsg ? <Text> {errorMsg} </Text> : null}
			<Text> We have found {results.length} results </Text>
			<ResultsList
				title='Cost Effective'
				resultSet={filterResultsByPrice('$')}
			/>
			<ResultsList title='Bit Pricier' resultSet={filterResultsByPrice('$$')} />
			<ResultsList
				title='Big Spender'
				resultSet={filterResultsByPrice('$$$')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: 'white',
	},
});

export default SearchScreen;
