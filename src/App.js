import React, { Component } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';


class App extends Component {

render() {

    return (
      <div className="App">
      <h2 className="heading">Recipe App - Badi Test</h2>
        <SearchInput />      
      </div>
    );
  }
}
export default App;