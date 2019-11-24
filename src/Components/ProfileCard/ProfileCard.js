import React, { useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

import './Style.css';

import UserRepos from './UserRepos';
import Pagignator from '../Paginator/Paginator';

import { isObjectEmpty } from '../../Utils/utility';

const ProfileCard = ({ userProfiles }) => {
	const [ offset, setOffset ] = useState(0);

	const handlePageClick = (data) => {
		let selected = data.selected;
		let offset = Math.ceil(selected * 3);
		setOffset(offset);
	};

	if (!isObjectEmpty(userProfiles)) {
		const { total_count, items } = userProfiles;
		const pageCount = items.length;
		return (
			<div className="profile-cardcontainer">
				<div className="profile-card">
					<label className="mt-3">Total Results:{total_count}</label>
				</div>
				{items.slice(offset, 3 + offset).map((profile) => {
					const { login, html_url, avatar_url } = profile;
					return (
						<div className="card mb-3 mt-3 profile-card" key={uuid()}>
							<div className="row no-gutters">
								<div className="col-md-4 col-lg-2">
									<img src={avatar_url} className="card-img" alt="avtar" />
								</div>
								<div className="col-md-8 col-lg-10">
									<div className="card-body">
										<h3 className="card-title">{login}</h3>
										<p>
											Profile URL :{' '}
											<a href={html_url} target="_blank">
												{html_url}
											</a>
										</p>
										<UserRepos userName={login} />
									</div>
								</div>
							</div>
						</div>
					);
				})}
				<Pagignator pageCount={pageCount} handlePageClick={handlePageClick} />
			</div>
		);
	} else {
		return (
			<div className="profile-cardcontainer">
				<h3 className="text-center">Please Enter name to search</h3>
			</div>
		);
	}
};

ProfileCard.propTypes = {
	userProfiles: PropTypes.object
};

export default ProfileCard;
