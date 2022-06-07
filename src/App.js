import React, { Component } from 'react';
import PaletteContainer from './containers/PaletteContainer';
import './App.css';

class App extends Component {
  render() {  // class로 바꿀 때는 render가 필요함.
    return (
      <div className="App">
        <PaletteContainer/>
      </div>
    );
  }
}

export default App;
