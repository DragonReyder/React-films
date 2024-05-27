import React from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Main } from './components/main';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  )
}

export default App;
