import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Navbar from './component/Navbar';
import Landing from './component/Landing';
import DashBoard from './component/DashBoard';
import Track from './component/Track';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/track" component={Track} />
      </header>
    </Router>
  );
}

export default App;