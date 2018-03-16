import React from 'react'; 
import Home from '../components/home/Home.js';

const Urls = (path) => ({
	'/':       		<Home />,
})[path]

export default Urls;

