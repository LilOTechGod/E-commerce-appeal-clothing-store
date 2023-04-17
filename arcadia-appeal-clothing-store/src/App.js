import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Routes} from "react-router-dom";

import LaunchPage from './components/launchPage/launchPage';
import Appbar from './components/Appbar/app';
import Carousel from './components/Carousel/carousel'
import Products from "./components/products/Products"
import Login from './components/Login/login'

function App() {
  return (
    <div>
      <LaunchPage />
      <Appbar />


      <Router>

        <Routes>

          <Route path='/' element={<Carousel />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Login' element={<Login />} />

        </Routes>
      </Router>

    </div>
  );
}
export default App;
