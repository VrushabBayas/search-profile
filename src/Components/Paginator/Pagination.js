import React from 'react';
import PropTypes from 'prop-types';

import ReactPaginate from 'react-paginate';

import './Styles.css';
const Paginatation = ({ pageCount, handlePageClick }) => {
	return (
		<div className="paginator">
			<ReactPaginate
				previousLabel={'previous'}
				nextLabel={'next'}
				breakLabel={'...'}
				breakClassName={'break-me'}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={handlePageClick}
				containerClassName={'pagination'}
				subContainerClassName={'pages pagination'}
				activeClassName={'active'}
			/>
		</div>
	);
};

Paginatation.propTypes = {
	pageCount: PropTypes.number,
	handlePageClick: PropTypes.func
};

export default Paginatation;
