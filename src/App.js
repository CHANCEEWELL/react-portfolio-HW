import React from 'react';
import Navbar from './my-app/components/Navbar';
import './App.css';
import Home from './my-app/components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './my-app/components/pages/Portfolio';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;