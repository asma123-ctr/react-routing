import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home';
import Header from './Header';
import Footer from './footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { Component } from 'react'

function ErrorPage() {
  return (
    <div>
      <h1>404</h1>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Header />
        <Switch>
        <Route  exact path="/about">
            <About />
        </Route>
        <Route  exact path="/">
          <Home />

        </Route>
       
        <Route component={About} />


        </Switch>
        <Footer />
      </Router>
    </>
    )
  }
}


