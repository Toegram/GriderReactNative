import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Searchbar from './components/Searchbar';
// import yelp from './api/yelp';
import useResults from './hooks/useResults';
import ResultsList from './components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = ({ navigation }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchAPI, results, errorMsg] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<>
			<Searchbar
				term={searchTerm}
				onTermChange={(newTerm) => setSearchTerm(newTerm)}
				onTermSubmit={() => searchAPI(searchTerm)}
			/>
			{errorMsg ? <Text> {errorMsg} </Text> : null}
			{/* <Text> We have found {results.length} results </Text> */}

			<ScrollView styles={styles.outerView}>
				<ResultsList
					title='Cost Effective'
					resultSet={filterResultsByPrice('$')}
					navigation={navigation}
				/>
				<ResultsList
					title='Bit Pricier'
					resultSet={filterResultsByPrice('$$')}
					navigation={navigation}
				/>
				<ResultsList
					title='Big Spender'
					resultSet={filterResultsByPrice('$$$')}
					navigation={navigation}
				/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: 'white',
		flex: 1,
	},
	outerView: {
		marginBottom: 20,
	},
});

export default SearchScreen;
