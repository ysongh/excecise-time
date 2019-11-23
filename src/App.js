import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Navbar from './component/Navbar';
import Patient from './component/Patient';
import DashBoard from './component/DashBoard';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Navbar />
        <Patient />
        <Route exact path="/" component={DashBoard} />
      </header>
    </Router>
  );
}

export default App;