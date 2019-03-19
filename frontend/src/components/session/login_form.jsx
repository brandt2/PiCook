import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/recipes');
    }
    this.setState({errors: nextProps.errors})
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
      password: this.state.password
    };

    this.props.login(user);
  }

  handleDemo(e) {
    e.preventDefault();
    
    let user = {
      username: "demodemo",
      password: "password"
    };

    this.props.login(user);
  }

  renderErrors(){
    return(
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
            <img src={require("./favicon.png")} alt="" />
          </div>
          <h2 className="signup-title">Log In</h2>
          {this.renderErrors()}

          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            placeholder='Username'
            className="username"
          />
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
            className="password"
          />

          <input className="signup-form-button" type="submit" value="Log In" />

          <button className="demo-button" onClick={this.handleDemo}>Demo Login</button>

          <h2 className="to-login">Already have an account?
            <Link className="redirect-login" to="/signup"> Sign up here.</Link>
          </h2>
        </form>
          


      </div>
    );
  }
}

export default withRouter(LoginForm);