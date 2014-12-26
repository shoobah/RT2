/** @jsx React.DOM */
var React = require('react');

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
  	var time=this.state.secondsElapsed + 1;
    this.setState({secondsElapsed: time});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Tenths of seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

module.exports = Timer;