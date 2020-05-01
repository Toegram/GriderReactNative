import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import Card from './Card';

const ResultsList = ({ title, resultSet, navigation }) => {
	return (
		<View>
			<Text style={styles.header}>{title}</Text>
			<FlatList
				data={resultSet}
				keyExtractor={(result) => result.id}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate('ResultsShow');
							}}
						>
							<Card item={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default ResultsList;

const styles = StyleSheet.create({
	header: {
		fontSize: 25,
		fontWeight: 'bold',
		padding: 7,
	},
	restName: {
		fontSize: 18,
		padding: 10,
	},
});
