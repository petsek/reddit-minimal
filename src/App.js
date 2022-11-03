import React from 'react';
import './App.css';
import {Header} from './components/header/header'
import {MainContainer} from './components/mainContainer/mainContainer'
import { SideContainer } from './components/sideContainer/sideContainer';

function App() {
  return (
    <div className="App">
      <Header />

      <div className = 'bodyContainer'>
        <MainContainer />
        <SideContainer />
      </div>
      
    </div>
  );
}

export default App;
