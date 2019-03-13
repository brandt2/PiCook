import React from 'react';
import './splash.css';
import { withRouter } from 'react-router-dom';
import SearchBoxContainer from '../search_box/search_box_container';

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
    this.props.history.push(`/dbmeals/${this.state.search}`)
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
        <div className="wrap">
          <form className="search" onSubmit={this.handleSubmit}>
            <input
              className="search-term" 
              type="text" 
              onChange={this.handleUpdate}
              placeholder="What food do you want to make?"/>
            <button className="search-button" type="submit"><i class="fas fa-search"></i></button>
          </form>
          <div className="search-image-box-div">
            <SearchBoxContainer className="search-image-box"/>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Splash);