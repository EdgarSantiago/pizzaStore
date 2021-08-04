import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './components/Navbar/data';
import Feature from './components/Feature';


function App() {
  return (
      <Router>
        <GlobalStyle/>
        <Hero/>
        <Products heading='choose your favorite' data={productData}/>
        <Feature/>
        <Products heading='choose your favorite' data={productData}/>
      </Router>
  );
}

export default App;
