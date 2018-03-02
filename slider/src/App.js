import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <NavBar />
        <Slider />
        <Footer />
      </div>
    );
  }
}

const styles = {
  app: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'rgb(148, 32, 244)',
    flexDirection: 'column',
  },
}

export default App;
