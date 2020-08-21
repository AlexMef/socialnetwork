import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div id="page-wrapper">
      <div id="header"><Header /></div>
      <div id="content"><Content /></div>
      <div id="footer"><Footer /></div>
    </div>
  );
}

export default App;
