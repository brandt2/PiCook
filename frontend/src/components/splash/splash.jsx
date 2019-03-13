import React from 'react';
import './splash.css';
import { withRouter } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/dbmeals/${e.currentTarget.value}`)
  }

  handleUpdate(e){
    this.setState({search: e.currentTarget.value});
  }

  render () {
    return (
      <div className="splash">
        <div className='slide1'></div>
        <div className='slide2'></div>
        <div className='slide3'></div>
        <div className="testing-things-out">
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleUpdate}/>
          </form>
          <h1>Find your Recipe</h1>
          <br />
          <h3>Join the PiCook community</h3>
        </div>
      </div>
    )
  }
}

export default withRouter(Splash);