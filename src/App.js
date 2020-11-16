import './App.css';
import profileImage from './image/prabanjan.jpg';
import React, { Component, notification } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch, HashRouter,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';
import { PrivateRoute } from './routers/privateRoute';
import { PublicRoute } from './routers/publicRoute';

class  App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }
  
  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }

  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <PrivateRoute exact path="/chat" authenticated={this.state.authenticated} component={Chat}></PrivateRoute>
          <PublicRoute exact path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>
          <PublicRoute exact path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
        </Switch>

    ); 
  }
}

export default App;
