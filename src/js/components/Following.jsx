var React = require('react');
var $ = require('jquery');
var GithubUser = require('./GithubUser');

var Following = React.createClass({
	getInitialState: function() {
		return {
			following: []
		}
	},
	componentDidMount: function() {
		var that = this;
		$.getJSON(`https://api.github.com/users/${this.props.params.username}/following` + `?access_token=fea7928428c0e732d06ded75eb1a7611cc4d74f8`)
			.then(function(following){
				that.setState({
					following: following
				});
			});
	},
	render: function() {
		return (
			<div className="following-page">
				<h2>{this.props.params.username} is following...</h2>
				<ul className="followers-list">
  					{this.state.following.map(follower => {
  						return <GithubUser key={follower.id} {...follower}/>
  					})}
  				</ul>
			</div>
			);
	}
});

module.exports = Following;