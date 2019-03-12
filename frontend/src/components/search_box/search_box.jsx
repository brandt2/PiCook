import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Vision from "@google-cloud/vision";
import ReactDropzone from "react-dropzone";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.onDropImg = this.onDropImg.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDrop(file) {
      this.props.getImageURLByAWS(file).then(res => console.log(res));
  }

  render() {
    let imgPlaceholder = "Drag and drop your image.";
    return (
      <div className="search-img-box">
            <ReactDropzone onDrop={this.handleDrop}>{imgPlaceholder}</ReactDropzone>
      </div>
    );
  }
}