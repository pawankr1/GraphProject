import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Store from './Store';
import MyApp from './component/MyApp';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Provider Store={Store}>
        <div className="App">
          <MyApp />
        </div>
      </Provider>
    );
  }
}

export default App;