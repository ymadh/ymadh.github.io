import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/header';
import Content from './components/content';


function App() {


  return (
    <HashRouter basename="/">
      <Header />
      <Content />
    </HashRouter>
  );
}

export default App;
