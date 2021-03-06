import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Searchbar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<FontAwesome name='search' style={styles.iconStyle} />
			<TextInput
				style={styles.inputStyle}
				placeholder='Search'
				value={term}
				onChangeText={onTermChange}
				autoCapitalize='none'
				autoCorrect={false}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		height: 50,
		marginHorizontal: 15,
		marginTop: 10,
		marginBottom: 15,
		borderWidth: 0.5,
		// borderColor: 'black',
		borderRadius: 10,
		backgroundColor: '#F0eeee',
		flexDirection: 'row',
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 42,
		alignSelf: 'center',
		marginHorizontal: 10,
	},
});

export default Searchbar;
