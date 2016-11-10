var React = require('react');

var GithubRepo = React.createClass({
	render: function() {
		return (
			<li>
			<a href={this.props.url}/>
			hahaha
			</li>
		)
	}

});

module.exports = GithubRepo;