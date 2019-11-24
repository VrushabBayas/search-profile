import React, { useState } from 'react';
import './Style.css';
import { useFetch } from '../../Actions/hooks';
import ProfileCard from '../ProfileCard/ProfileCard';
import { response } from '../data';
const SearchBar = () => {
	const [ userProfileQuery, setUserProfileQuery ] = useState(' ');

	const updateUserProfileQuery = (event) => {
		setUserProfileQuery(event.target.value);
	};
	let url = `/search/users?q=${userProfileQuery}`;
	let userProfiles = response;
	// let userProfiles = useFetch(url, {});

	return (
		<React.Fragment>
			<div className="">
				<nav className="navbar navbar-expand-lg search-bar">
					<div className="collapse navbar-collapse navbarSupportedContent" id="navbarSupportedContent">
						<form className="form-inline my-2 my-lg-0">
							<select className="custom-select search">
								<option value="0">Sort by Name(A-Z)</option>
								<option value="1">Sort by Name(A-Z)</option>
								<option value="2">Rank top</option>
								<option value="3">Rank down</option>
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
