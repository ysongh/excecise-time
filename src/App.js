import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Navbar from './component/Navbar';
import Patient from './component/Patient';
import DashBoard from './component/DashBoard';
import Track from './component/Track';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Navbar />
        <Patient />
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/track" component={Track} />
      </header>
    </Router>
  );
}

export default App;