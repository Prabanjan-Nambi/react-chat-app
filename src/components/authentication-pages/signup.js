import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../helpers/auth';
import './credentials.css';
import { Tooltip, Button, Input } from 'antd';

export default class SignUp extends Component {
  
   constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
   }

   async handleSubmit(event) {
     event.preventDefault();
     this.setState({ error: '' });
     try {
       await signup(this.state.email, this.state.password);
     } catch (error) {
       this.setState({ error: error.message });
     }
   }
   
   render() {
    return (
      <div>
        <form className="app-creds-form">
          <div className="app-creds-form-div">
            <h1>
              Sign Up to <span className="app-name">KloudChat</span>
            </h1>
            <p>Fill in the form below to create an account.</p>
            <div  className="app-creds-form-controls">
              <Input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></Input>
            </div>
            <div  className="app-creds-form-controls">
              <Input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></Input>
            </div>
            <div>
              {this.state.error ? <p>{this.state.error}</p> : null}
              <Tooltip title="Login">
                  <Button onClick={this.handleSubmit} type="primary">SignUp</Button>
              </Tooltip>
            </div>
            <hr></hr>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    )
   }
}