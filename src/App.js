/*
 * Filename: App.js
 * Created Date: Friday, November 22nd 2019, 11:23:45 pm
 * Author: vrush
 * @desc:Main App component 
 */

import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
	return (
		<div className="container">
			<SearchBar />
		</div>
	);
}

export default App;
