import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

  handleIncrement() {
    const { actions, params: { domain } } = this.props;
    actions.increment(domain);
  }

  handleDecrement() {
    const { actions, params: { domain } } = this.props;
    actions.decrement(domain);
  }

  handleHome() {
    const { actions } = this.props;
    actions.home();
  }

  render() {
    const { counter, params: { domain } } = this.props;
    const c = counter.get(domain) || 0;
    return (
      <p>
        Clicked: {c} times
        {' '}
        <button onClick={this.handleIncrement}>+</button>
        {' '}
        <button onClick={this.handleDecrement}>-</button>
        {' '}
        <button onClick={this.handleHome}>Home</button>
      </p>
    )
  }
}

export default Counter;
