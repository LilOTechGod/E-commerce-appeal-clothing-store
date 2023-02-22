import React from 'react';
import './App.css';
import LaunchPage from './components/launchPage/launchPage';
import LogIn from './components/logIn/logIn';
import Appbar from './components/Appbar/app';

function App() {
  return (
    <div>
      <LaunchPage />
      <LogIn />
      <Appbar />
    </div>
  );
}

export default App;
