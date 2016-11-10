var React = require('react');
var $ = require('jquery');
var GithubUser = require('./GithubUser');

var Followers = React.createClass({
	getInitialState: function() {
		return {
			followers: []
		}
	},
	componentDidMount: function() {
		var that = this;
		$.getJSON(`https://api.github.com/users/${this.props.params.username}/followers` + `?access_token=fea7928428c0e732d06ded75eb1a7611cc4d74f8`)
			.then(function(followers){
				that.setState({
					followers: followers
				});
			});
	},
	render: function() {
		return (
			<div className="followers-page">
				<h2>Followers of {this.props.params.username}</h2>
				<ul className="followers-list">
  					{this.state.followers.map(follower => {
  						return <GithubUser key={follower.id} {...follower}/>
  					})}
  				</ul>
			</div>
			);
	}

});

module.exports = Followers;