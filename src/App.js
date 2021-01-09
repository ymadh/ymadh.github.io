import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Content from './components/content';


function App() {


  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Content />
    </Router>
  );
}

export default App;
