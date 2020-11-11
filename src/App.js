import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
// import Articles from './pages/Articles';
import Registration from './pages/Registration';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Content>
        {/* <Articles /> */}
        <Registration />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
