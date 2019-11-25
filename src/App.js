/*
 * Filename: App.js
 * Created Date: Friday, November 22nd 2019, 11:23:45 pm
 * Author: vrush
 * @desc:Main App component 
 */

import React from 'react';
import './App.css';
import SearchProfile from './Components/SearchProfile/SearchProfile';

function App() {
	return (
		<div className="App">
			<SearchProfile />
		</div>
	);
}

export default App;
