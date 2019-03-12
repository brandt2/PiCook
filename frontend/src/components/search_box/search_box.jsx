import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Vision from "@google-cloud/vision";
import ReactDropzone from "react-dropzone";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.onDropImg = this.onDropImg.bind(this);
  }

  render() {
    let imgPlaceholder = "Drag and drop your image.";
    return (
      <div className="search-img-box">
        <ReactDropzone onDrop={this.onDropImg}>{imgPlaceholder}</ReactDropzone>
      </div>
    );
  }
}


axios.post({
    method:'post',
    url: 'https://vision.googleapis.com/v1/images:annotate',
    data: {
        "requests": [
            {
                "image": {
                    "source": {
                        "imageUri":
                            "https://picook-img-upload.s3.us-west-1.amazonaws.com/1552351995481"
                    }
                },
                "features": [
                    {
                        "type": "LABEL_DETECTION",
                        "maxResults": 1
                    }
                ]
            }
        ]
    }
})