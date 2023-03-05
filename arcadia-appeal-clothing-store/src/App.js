import React from 'react';
import './App.css';
import LaunchPage from './components/launchPage/launchPage';
import Appbar from './components/Appbar/app';
import Carousel from './components/Carousel/carousel'

function App() {
  return (
    <div>
      <LaunchPage />
      <Appbar />
      <Carousel />
    </div>
  );
}

export default App;
