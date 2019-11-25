/*
 * Filename: axios.init.js
 * Created Date: Sunday, November 24th 2019, 5:55:36 am
 * Author: vrushabh Bayas
 */

import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'https://api.github.com'
});

export const API_RESPONSE_CODE = {
	SUCCESS: 200,
	BAD_REQUEST: 400,
	FORBIDDEN: 403,
	NOT_FOUND: 404
};
