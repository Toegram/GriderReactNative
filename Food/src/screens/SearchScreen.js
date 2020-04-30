import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Searchbar from './components/Searchbar';

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<View style={styles.containerStyle}>
			<Searchbar
				term={searchTerm}
				onTermChange={(newTerm) => setSearchTerm(newTerm)}
				onTermSubmit={() => console.log('term was submitted')}
			/>
			<Text> Search Screen </Text>
			<Text> {searchTerm} </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: 'white',
	},
});

export default SearchScreen;
