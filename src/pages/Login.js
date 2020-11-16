import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin } from "../helpers/auth";
import { Tooltip, Button, Input, Row, Col } from "antd";
import './Credentials.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: ""
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
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div>
        <form className="app-creds-form"
          autoComplete="off"
        >
        <div className="app-creds-form-div">
          <h1>
            Login to
              <span className="app-name">KloudChat</span>
          </h1>
          <p>
            Fill in the form below to login to your account.
          </p>
          <div className="app-creds-form-controls">
            <Input 
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="app-creds-form-controls">
            <Input 
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div>
            {this.state.error ? (
              <p>{this.state.error}</p>
            ) : null}
            <Tooltip title="Login">
                <Button onClick={this.handleSubmit} type="primary">Login</Button>
            </Tooltip>
          </div>
          <hr />
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          </div>
        </form>
      </div>
    );
  }
}