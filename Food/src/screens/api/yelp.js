import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer nZZPG43atr0vxKfhz5lqip0pOygdB_OvX-ZYa8LDn6IA2LFxtgHUrQL3Wi2nE0dUbvE1XaEYxDW2NRMe4uYTbi69ENLLKyeSQo5YSk7J2xJruw-GXihyXxjEESWnXnYx',
	},
});
