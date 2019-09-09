import React from 'react';
import Header from './components/Header'
import { StyledBlue } from './styles/StyledBlue'
import Blue from './components/Blue';
import Page from './components/Page';


const App = () => (
  <div>
    <Header />
    <StyledBlue>
      <Blue />
      <Page />
    </StyledBlue>
  </div>
);

export default App;
