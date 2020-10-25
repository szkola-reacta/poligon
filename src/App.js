import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Articles from './pages/Articles';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Content>
        <Articles />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
