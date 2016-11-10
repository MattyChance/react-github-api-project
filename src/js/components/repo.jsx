var React = require('react');
var $ = require('jquery');
var GithubUser = require('./GithubUser');

var Repo = React.createClass({
	getInitialState: function() {
		return {
			repo: []
		}
	},
	componentDidMount: function() {
		var that = this;
		$.getJSON(`https://api.github.com/users/${this.props.params.username}/repos?access_token=fea7928428c0e732d06ded75eb1a7611cc4d74f8`)
			.then(function(repo){
				that.setState({
					repo: repo
				});
			});
	},
	render: function() {
		console.log(this.state.repo)
		return (
			<div className="repo-page">
				<h2>{this.props.params.username}'s repos</h2>
				<ul className="repo-list">
  					{this.state.repo.map(repo => {
  						return <GithubRepo key={repo.id} {...repo}/>
  					})}
  				</ul>
			</div>
			);
	}
});

module.exports = Repo;