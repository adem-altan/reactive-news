import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';

class App extends Component { 
  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Navbar />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
