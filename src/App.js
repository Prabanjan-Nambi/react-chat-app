import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, HashRouter, Redirect} from "react-router-dom";
import Home from './components/home/home';
import Chat from './components/dashboard/chat';
import Signup from './components/authentication-pages/signup';
import Login from './components/authentication-pages/login';
import { auth } from './services/firebase';
import { PrivateRoute } from './app-routers/privateRoute';
import { PublicRoute } from './app-routers/publicRoute';
import { Spin } from 'antd';
import './App.css';

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
    return this.state.loading === true ? 
        <div className="app-loader">
           <Spin size="large"/>
        </div> : 
        (<Switch>
          <PrivateRoute exact path="/" authenticated={this.state.authenticated} component={Home}></PrivateRoute>
          <PrivateRoute exact path="/chat" authenticated={this.state.authenticated} component={Chat}></PrivateRoute>
          <PublicRoute exact path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>
          <PublicRoute exact path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
        </Switch>); 
  }
}

export default App;
