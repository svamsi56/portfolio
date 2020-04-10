import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/navigation.component';
import Homepage from './components/HomePage/homepage.component';
import About from './components/About/about.component';
import Photos from './components/Photos/photos.component';
import Contact from './components/Contact/contact.component';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path = '/' component = {Homepage}/>
          <Route path = '/about' component = {About}/>
          <Route path = '/photos' component = {Photos}/>
          <Route path = '/contact' component = {Contact}/>
        </Switch>
      </div>
    );
  }
}

export default App;
