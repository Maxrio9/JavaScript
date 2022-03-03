import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  startInterval() {
    let delay = 1000;
    if (this.props.isPrecise) {
      delay = 100;
    }
    this.intervalID = setInterval(() => {
    this.setState({ date: new Date() });
    }, delay);
  }
  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  componentDidMount() {
    this.startInterval();
  }
  componentDidUpdate(prevProps) {
    if (this.props.isPrecise === prevProps.isPrecise) {
      return;
    }
    this.startInterval();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}