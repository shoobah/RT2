/** @jsx React.DOM */

var React = require('react');
	// Timer = require('./components/Timer'),
	HelloMessage = require('./components/HelloMessage');

React.renderComponent(
		<HelloMessage />,
		document.getElementById('app')
	);