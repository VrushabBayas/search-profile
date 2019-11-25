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
import { strings } from '../../Utils/Constants';
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
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">{strings.REPO}</th>
							<th scope="col">{strings.LANGUAGE}</th>
							<th scope="col">{strings.OPEN_ISSUES}</th>
							<th scope="col">{strings.WATCHERS}</th>
							<th scope="col">{strings.FORK_COUNT}</th>
							<th scope="col">
								<button
									type="button"
									className="btn btn-outline-info details-button"
									onClick={onCollapseClick}
								>
									{collapse ? 'Details' : 'Hide'}
								</button>
							</th>
						</tr>
						<tr className="content">
							<td>1</td>
							<td>{repos[0].name}</td>
							<td>{repos[0].language}</td>
							<td>{repos[0].open_issues}</td>
							<td>{repos[0].watchers}</td>
							<td>{repos[0].forks_count}</td>
						</tr>
					</thead>
					{!collapse && (
						<tbody className="content">
							{repos.slice(1, repos.length).map((repo, i) => {
								const { name, language, open_issues, watchers, forks_count } = repo;
								return (
									<tr key={uuid()}>
										<th scope="row">{i + 2}</th>
										<td>{name}</td>
										<td>{language}</td>
										<td>{open_issues}</td>
										<td>{watchers}</td>
										<td>{forks_count}</td>
									</tr>
								);
							})}
						</tbody>
					)}
				</table>
				{repos.length === 1 && !collapse && <p className="ma info">{strings.SINGLE_RECORD}</p>}
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
