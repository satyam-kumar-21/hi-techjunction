import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <Router> 
      <Header />

      <Home/>
      <Footer />
    </Router>
  );
}

export default App;
