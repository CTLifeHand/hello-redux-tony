import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { increment, decrement } from './store/counter/action';
import User from './components/User';
import Reminder from './components/Reminder';

class App extends Component {

  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() {
    const { increment, decrement } = this.props;
    return (
      <div className="App">
        <div className="container">
          <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
          <p className="text-center">
            <button onClick={() => increment()} className="btn btn-primary mr-2">Increase</button>
            <button onClick={() => decrement()} className="btn btn-danger my-2">Decrease</button>
          </p>
        </div>
        <User />
        <Reminder />

        
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps, {increment,decrement})(App);
