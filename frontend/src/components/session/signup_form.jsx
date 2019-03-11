import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      fname: '',
      lname: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      email: this.state.email,
      fname: this.state.fname,
      lname: this.state.lname,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul className="signup-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="favicon">
            <img src={require("./favicon.png")} alt=""/>
          </div>
          <h2 className="signup-title">Sign Up</h2>
          {this.renderErrors()}
          <br/>
          
          <div className="signup-name">
            <input type="text"
              value={this.state.fname}
              onChange={this.update('fname')}
              placeholder='First name'
              className="firstname"
            />
            <input type="text"
              value={this.state.lname}
              onChange={this.update('lname')}
              placeholder='Last name'
              className="lastname"
            />
          </div>

          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            placeholder="Username"
            className="username"
          />
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder='Email'
            className="email"
          />
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
            className="password"
          />
          <input type="password"
            value={this.state.password2}
            onChange={this.update('password2')}
            placeholder="Confirm Password"
            className="password"
          />
          <input className="signup-form-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);