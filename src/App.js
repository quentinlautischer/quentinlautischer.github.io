import React from 'react';

import MainContainer from './MainContainer.tsx';
import ParalaxContainer from './Components/ParalaxContainer';

import './App.scss';

function App() {
  return (
    <ParalaxContainer className="App">
        <MainContainer />
    </ParalaxContainer>
  );
}

export default App;
