import axios from 'axios';

const instance = axios.create({
	baseURL: config.apiURL
});

export default instance;