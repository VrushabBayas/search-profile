import React, { useState } from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid/v4';
import _ from 'lodash';
import './Style.css';

import UserRepos from './UserRepos';
import Paginatation from '../Paginator/Pagination';

import { strings } from '../../Utils/Constants';

const ProfileCard = ({ userProfiles }) => {
	const [ offset, setOffset ] = useState(0);

	const handlePageClick = (data) => {
		let selected = data.selected;
		let offset = Math.ceil(selected * 5);
		setOffset(offset);
	};

	if (!_.isEmpty(userProfiles)) {
		const { total_count, items } = userProfiles;
		const pageCount = items.length;
		if (pageCount === 0) {
			return (
				<div className="profile-cardcontainer">
					<h3 className="text-center">{strings.NO_RESUL_FOUND}</h3>
				</div>
			);
		}
		return (
			<div className="profile-cardcontainer">
				<div className="ma w85">
					<label>
						{strings.TOTAL_RESULTS}:{total_count}
					</label>
				</div>
				{items.slice(offset, 5 + offset).map((profile) => {
					const { login, html_url, avatar_url } = profile;
					return (
						<div className="card mb-3 mt-3 ma w85" key={uuid()}>
							<div className="row no-gutters">
								<div className="col-md-4 col-lg-2">
									<img src={avatar_url} className="card-img" alt="avtar" />
								</div>
								<div className="col-md-8 col-lg-10">
									<div className="card-body">
										<h3 className="card-title">{login}</h3>
										<p>
											Profile URL :{' '}
											<a href={html_url} rel="noopener noreferrer" target="_blank">
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
				<Paginatation pageCount={pageCount} handlePageClick={handlePageClick} />
			</div>
		);
	} else {
		return (
			<div className="profile-cardcontainer">
				<h3 className="text-center">{strings.ENTER_NAME}</h3>
			</div>
		);
	}
};

ProfileCard.propTypes = {
	userProfiles: PropTypes.object
};

export default ProfileCard;
