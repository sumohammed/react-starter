import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BrowserHistory from './BrowserHistory.js';
import Urls from './Urls.js';
import NotFound from '../error/NotFound.js';
import Link from './Link.js';


class Router extends Component {

	state = {
	   location: BrowserHistory.location,
	};

	handleRoute = (location) => {
		let path = location.pathname;
		return Urls(path) || <NotFound />;
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
				{page}
			</React.Fragment>
		)
	}
	
}

export default Router; 