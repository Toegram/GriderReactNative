import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = ({ item }) => {
	return (
		<View style={styles.card}>
			<Image source={{ uri: item.image_url }} style={styles.image} />
			<Text style={styles.header}>{item.name}</Text>
			<Text>
				{item.rating} Stars, {item.review_count} Reviews
			</Text>
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	card: {
		height: 130,
		width: 250,
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 8,
		backgroundColor: 'black',
		marginLeft: 10,
		marginBottom: 20,
		flex: 1,
		alignItems: 'center',
	},
	header: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
		textTransform: 'uppercase',
		zIndex: 9999,
		position: 'absolute',
	},
	image: {
		width: 245,
		height: '100%',
		borderRadius: 10,
	},
});
