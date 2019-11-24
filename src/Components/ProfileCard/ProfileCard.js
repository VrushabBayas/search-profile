import React, { useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

import './Style.css';
import { isObjectEmpty } from '../../Utils/utility';
import Pagignator from '../Paginator/Paginator';
const ProfileCard = ({ userProfiles }) => {
	const [ offset, setOffset ] = useState(0);

	const handlePageClick = (data) => {
		let selected = data.selected;
		let offset = Math.ceil(selected * 1);
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
					return (
						<div className="card mb-3 mt-3 profile-card" key={uuid()}>
							<div className="row no-gutters">
								<div className="col-md-4 col-lg-2">
									<img src="..." className="card-img" alt="..." />
								</div>
								<div className="col-md-8 col-lg-10">
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This content is a little bit longer.
										</p>
										<p className="card-text">
											<small className="text-muted">Last updated 3 mins ago</small>
										</p>
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
