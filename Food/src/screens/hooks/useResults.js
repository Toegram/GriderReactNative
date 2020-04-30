import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMsg, setErrorMsg] = useState('');

	const searchAPI = async (searchablePhrase) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchablePhrase,
					location: '11901',
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMsg('Something Went Horribly Wrong');
		}
	};

	useEffect(() => {
		searchAPI('pasta');
	}, []);

	return [searchAPI, results, errorMsg];
};
