import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Navbar from './component/Navbar';
import DashBoard from './component/DashBoard';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Navbar />
        <Route exact path="/" component={DashBoard} />
      </header>
    </Router>
  );
}

export default App;