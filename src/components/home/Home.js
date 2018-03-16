import React from 'react';

const Home = () => {
  return (
    <div className="container">
	    <div className="row">
	      <div className="one-half column" style={{"marginTop": "15%"}}>
	        <h1>Basic Page</h1>
	        <p>
	        	This index.html page is a placeholder with the CSS, font and favicon. It's just waiting for you to add some content! .
	        </p>
	        <h4>Features</h4>
	        <p>
	        	Grid Styles is by Skeleton. If you need some help hit up the <a href="http://www.getskeleton.com">Skeleton documentation</a>
	        	Default Css preprocessor is Stylus but can be changed to others such as sass, less.
	        </p>
	        <p>
	        	Assets are kept in the Assets folder and served using file-loader.
	        </p>
	        <p>
	        	Built In Custom Router. Checkout the routes file in the Router folder to add up routes.
	        </p>
	      </div>
	    </div>
	</div>
  );
}

export default Home;