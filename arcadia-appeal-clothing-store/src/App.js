import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LaunchPage from './components/launchPage/launchPage';
import Appbar from './components/Appbar/app';
import Carousel from './components/Carousel/carousel'

import Products from "./components/products/Products"

function App() {
  return (
    <div>
      <LaunchPage />
      <Appbar />


      <Router>

        <Routes>

          <Route path='/' element={<Carousel />} />
          <Route path='/products' element={<Products />} />


        </Routes>
      </Router>

    </div>
  );
}
export default App;
