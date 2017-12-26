import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BrowserHistory from './BrowserHistory.js';
import { Routes, NotFoundPage } from './Routes.js';
import Link from './Link.js';


class Router extends Component {

	state = {
	   location: BrowserHistory.location,
	};

	handleRoute = (location) => {
		let loc = location.pathname
		let ans;

		function isCurrentRoute(element) {
			if (element.location == loc) {
				let ans = element.location
				return ans
			}
		}

		function notFound(element) {
			if (element.location == "/notfound") {
				let ans = element.location
				return ans
			}
		}

		let page = Routes.find(isCurrentRoute) || NotFoundPage
		return page
	}

	componentDidMount() {
	  	this.unsubscribe = BrowserHistory.listen(location => {
	  		this.setState({location});
	  	})
	}

	componentWillUnmount() {
	  	this.unsubscribe();
	}

	render() {
		const page = this.handleRoute(this.state.location)
		return (
			<React.Fragment>
				{page.render()}
			</React.Fragment>
		)
	}
	
}

export default Router; 