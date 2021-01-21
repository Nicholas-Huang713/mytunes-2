import React from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
