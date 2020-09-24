import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';
class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
  }
  generateNum = () => {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  };
  handleClick = () => {
    this.generateNum();
  };

  render() {
    console.log('nums::', this.state.nums);
    return (
      <section className='lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n, index) => (
            <Ball num={n} key={index} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}
export default Lottery;
