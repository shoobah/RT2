(function(){
	var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: -7};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 0.1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 100);
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

React.render(
		<div>
			<HelloMessage name="doe" />
			<Timer />
		</div>
		, mountNode);
})();