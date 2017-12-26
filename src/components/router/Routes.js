import React from 'react';
import Home from '../home/Home.js';
import NotFound from '../error/NotFound.js';

export const Routes = [
	{
		'location': '/', 'render': function() { return <Home />}
	}
]

export const NotFoundPage = { 'location': '/notfound', 'render': function() { return <NotFound />} }

