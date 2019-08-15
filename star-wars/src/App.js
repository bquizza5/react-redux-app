import React from 'react';
import { connect } from 'react-redux';

import Characters from './components/characters'

import './App.css';



function App(props) {
  return (
    <div className="App">
    <button onClick={() => console.log(props.state)}>state</button>
      <Characters />
    </div>
  );
}

const mapStateToProps = state => ({
  state: state
});

export default connect(
  mapStateToProps,
)(App);
