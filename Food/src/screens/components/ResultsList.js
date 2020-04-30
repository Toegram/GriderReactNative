import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultsList = ({ title }) => {
	return (
		<View>
			<Text style={styles.header}>{title}</Text>
		</View>
	);
};

export default ResultsList;

const styles = StyleSheet.create({
	header: {
		fontSize: 25,
		fontWeight: 'bold',
		padding: 7,
		textTransform: 'uppercase',
	},
});
