import React from "react";
import { withRouter } from "react-router-dom";
import Dropzone from "react-dropzone";
import "./search_box.css";
import Modal from "react-modal";
import { Form, Checkbox } from "semantic-ui-react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement(document.getElementById("root"));

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.infoList = this.infoList.bind(this);
    this.state = {
      isShowList: false,
      modalIsOpen: false,
      textContent: "",
      loading: true
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.closeModal();
    this.props.history.push(`/dbmeals/${this.state.textContent}`);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal() {}

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleDrop(files) {
    if (files && files.length !== 0) {
      this.props.getResultFromVision(files[0]).then(res => {
        console.log(res);
        this.openModal();
      });
    }
  }

  responsesList() {
    return (
      <div className="response-select-list">
        <Form
          className="response-select-list-form"
          onSubmit={this.handleSubmit}
        >
          <Form.Field>
            Please Select: <b>{this.state.textContent}</b>
          </Form.Field>
          {this.props.visionResponses.map(key => {
            return (
              <Form.Field>
                <Checkbox
                  radio
                  label={`${key}`}
                  name="checkboxRadioGroup"
                  value={`${key}`}
                  checked={this.state.textContent === `${key}`}
                  onChange={this.update('textContent')}
                />
              </Form.Field>
            );
          })}
          <label>
            <input className="submit-button" type="submit" value="submit" />
          </label>
        </Form>
      </div>
    );
  }

  infoList() {
    if (this.props.visionResponses){
      if (
        this.props.visionResponses &&
        this.props.visionResponses.length !== 0
      ) {
        return (
          <div className="search-box-meal-response-list-container">
            {this.responsesList()}
          </div>
        );
      } else {
        return (
          <div className="search-box-meal-not-found">
            <p>
              Sorry, we don't have the information of your meal, please either
              retry or use the search bar.
            </p>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div >
        <Dropzone onDrop={acceptedFiles => this.handleDrop(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p className="search-img-box">Drag and drop a file here, or click to select file</p>
              </div>
            </section>
          )}
        </Dropzone>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="About your images."
        >
          {/* <h2 className="modal-seach-box-header">Pick best choice</h2> */}
          <div>{this.infoList()}</div>
          <button className="submit-button" onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SearchBox);
