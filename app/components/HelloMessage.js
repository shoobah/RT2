/** @jsx React.DOM */

var React = require('react'),
	Timer = require('./Timer');

var HelloMessage = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello Sune</h1>
				<Timer />
			</div>
		);
	}
});

module.exports = HelloMessage;