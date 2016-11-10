var React = require('react');
var Link = require('react-router').Link;

var GithubUser = React.createClass({
	render: function() {
		return (
			<li>
			<Link to={`/user/${this.props.login}`}>
				<img src={this.props.avatar_url} />
				{this.props.login}
			</Link>
			</li>
		)
	}

});

module.exports = GithubUser;