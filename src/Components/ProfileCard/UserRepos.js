/*
 * Filename: UserRepos.js
* Created Date: Sunday, November 24th 2019, 10:05:43 am
 * Author: vrushabBayas
 * @desc:To display repo's of user
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid/v4';

import { useFetch } from '../../Actions/hooks';
import './Style.css';
const FetchRepos = ({ userName }) => {
	const [ collapse, setCollapse ] = useState(true);
	let url = `/users/${userName}/repos`;
	let repos = useFetch(url, []);
	const onCollapseClick = () => {
		setCollapse(!collapse);
	};

	if (repos.length !== 0) {
		return (
			<React.Fragment>
				<div class="row">
					<div class="col-sm-4">{repos[0].name}</div>
					<div class="col-sm-4">{repos[0].language}</div>
					<div class="col-sm-4">
						<button type="button" class="btn btn-outline-info details-button" onClick={onCollapseClick}>
							Details
						</button>
					</div>
				</div>
				{!collapse && (
					<div className="content">
						{repos.slice(1, repos.length).map((repo) => {
							const { name, language } = repo;
							return (
								<React.Fragment>
									<div class="row" key={uuid()}>
										<div class="col-sm-4">{name}</div>
										<div class="col-sm-4">{language}</div>
									</div>
								</React.Fragment>
							);
						})}
					</div>
				)}
			</React.Fragment>
		);
	} else {
		return null;
	}
};
FetchRepos.propTypes = {
	userName: PropTypes.string
};

export default FetchRepos;
