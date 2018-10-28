import React, { Component } from 'react';
// import logo from './logo.svg';
import './assets/css/App.css';

// 引入组件
import Todolist from './components/Todolist';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Todolist/>
      </div>
    );
  }
}

export default App;
