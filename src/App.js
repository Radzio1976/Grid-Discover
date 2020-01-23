import React from 'react';
import Header from '../src/components/Header';
import TravelMemories from '../src/components/TravelMemories';
import TravelArticles from '../src/components/TravelArticles';
import About from '../src/components/About';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <TravelMemories />
        <TravelArticles />
        <About />
      </div>
    )
  }
}

export default App;
