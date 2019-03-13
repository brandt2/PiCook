import React from "react";
import { withRouter } from "react-router-dom";
import Dropzone from "react-dropzone";
import request  from 'request';
import "./search_box.css";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      isShowList : false
    }
  }


  handleDrop(files) {
      if (files && files.length !== 0) {
      this.props.getResultFromVision(files[0]);
      }
  }

  handleList() {

  }

  render() {

    return (
      <div className="search-img-box">
        <Dropzone onDrop={acceptedFiles => this.handleDrop(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
}

export default SearchBox;