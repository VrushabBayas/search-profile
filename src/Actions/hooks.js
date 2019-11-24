/*
 * Filename: hooks.js
 * Created Date: Saturday, November 23rd 2019, 11:44:03 pm
 * Author: Vrushabh Bayas
 */

import { useState, useEffect } from 'react';
import { axiosInstance as axios } from '../Utils/axios.init';
export const useFetch = (url, initialValue) => {
	const [ result, setResult ] = useState(initialValue);
	useEffect(
		() => {
			let isValidURL = /\s/.test(url);
			if (!isValidURL) {
				axios.get(url).then((response) => {
					if (response.status === 200) {
						setResult(response.data);
					}
				});
			}
		},
		[ url ]
	);
	return result;
};
