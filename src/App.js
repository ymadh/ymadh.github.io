import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getBlogPosts } from './store/blogSlice';
import Header from './components/header';
import Content from './components/content';
import './App.css';


function App() {


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getBlogPosts());


  }, [dispatch]);


  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
}

export default App;
