import React from 'react';

const NotFound = () => {
  return (
    <div className="container">
	    <div className="row">
	      <div className="eight column" style={{"marginTop": "25%"}}>
	        <h1>Oooooops !!!</h1>
	        <p>We cant seem to find seem to find the page you looking for. Go back <a href="/">Home</a>.</p>
	      </div>
	    </div>
	</div>
  );
}

export default NotFound;