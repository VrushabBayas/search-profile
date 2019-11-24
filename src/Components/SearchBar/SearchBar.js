import React, { useState, useEffect } from 'react';

import { axiosInstance as axios } from '../../Utils/axios.init';
import _ from 'lodash';
import './Style.css';

import ProfileCard from '../ProfileCard/ProfileCard';
import { response } from '../data';
const SearchBar = () => {
	let url = '';
	const [ userProfileQuery, setUserProfileQuery ] = useState(' ');
	const [ sortType, setSortType ] = useState('forward');
	const [ userProfiles, setUserProfiles ] = useState({});
	if (sortType === 'asc' || sortType === 'desc') {
		url = `/search/users?q=${userProfileQuery}&order=${sortType}`;
	} else {
		url = `/search/users?q=${userProfileQuery}`;
	}
	useEffect(
		() => {
			let isValidURL = /\s/.test(url);
			if (!isValidURL) {
				axios.get(url).then((response) => {
					if (response.status === 200) {
						setUserProfiles(response.data);
					}
				});
			}
		},
		[ userProfileQuery ]
	);
	const updateUserProfileQuery = (event) => {
		setUserProfileQuery(event.target.value);
	};
	const handleOnChange = (event) => {
		setSortType(event.target.value);
		let orderedProfile = userProfiles;
		if (event.target.value === 'topScore') {
			orderedProfile['items'] = _.orderBy(orderedProfile['items'], [ 'score' ], [ 'desc' ]);
		} else if (event.target.value === 'lessScore') {
			orderedProfile['items'] = _.orderBy(orderedProfile['items'], [ 'score' ], [ 'asc' ]);
		} else {
			orderedProfile['items'] = _.orderBy(orderedProfile['items'], [ 'login' ], [ sortType ]);
		}
		setUserProfiles(orderedProfile);
	};
	return (
		<React.Fragment>
			<div className="">
				<nav className="navbar navbar-expand-lg search-bar">
					<div className="collapse navbar-collapse navbarSupportedContent" id="navbarSupportedContent">
						<form className="form-inline my-2 my-lg-0">
							<select className="custom-select search" value={sortType} onChange={handleOnChange}>
								<option value="asc">Sort by Name(A-Z)</option>
								<option value="desc">Sort by Name(Z-A)</option>
								<option value="topScore">Rank top</option>
								<option value="lessScore">Rank down</option>
							</select>
							<input
								className="form-control mr-sm-2 search"
								type="search"
								placeholder="Search"
								aria-label="Search"
								onChange={updateUserProfileQuery}
							/>
						</form>
					</div>
				</nav>
			</div>
			{<ProfileCard userProfiles={userProfiles} />}
		</React.Fragment>
	);
};

export default SearchBar;
