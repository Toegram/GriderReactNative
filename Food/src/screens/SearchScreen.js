import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Searchbar from './components/Searchbar';

const SearchScreen = () => {
	return (
		<View style={styles.viewOne}>
			<Text>Search Screen</Text>
			<Searchbar />
		</View>
	);
};

const styles = StyleSheet.create({
	viewOne: {
		backgroundColor: '#110000',
	},
});

export default SearchScreen;
