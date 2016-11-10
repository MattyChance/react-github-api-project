var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
//using es6 destructuring
//var {Router, Route, browserHistory} = require('react-router');
//no need to declare the first two variables below after using es6 syntax
var Router = ReactRouter.Router;//no need in es6
var Route = ReactRouter.Route; //no need in es6
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./components/App');
var Search = require('./components/Search');
var User = require('./components/User');
var Followers = require('./components/Followers');
var Following = require('./components/Following');
var Repo = require('./components/Repo');


/*
Rendering a router will output the right component tree based on the current URL.
Nested routes' components will be passed down to the parent as `this.props.children`

If the URL is /, then <App/> will be rendered, and this.props.children will be <Search/> (this is the IndexRoute)
If the URL is /user/ziad-saab then <App/> will be rendered, and this.props.children will be <User/>
The <User/> instance will be passed a prop called `params`. It will be an object with `{username: 'ziad-saab'}`
*/
var routes = (
    <Router history={ReactRouter.browserHistory}>				
		<Route path="/" component={App}>
			<IndexRoute component={Search}/>
			<Route path="user/:username" component={User}>
		  	    <Route path="followers" component={Followers}/>
		  	    <Route path="following" component={Following}/>
		  	    <Route path="repos" component={Repo}/>
		  	</Route>
    	</Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));

