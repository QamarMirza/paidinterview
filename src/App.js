import React, { Component } from 'react';
import './App.css';
import ReactModal from 'react-modal';
import { PaidModal } from './paid-model';
import { ImageGrid } from './card-grid';

ReactModal.setAppElement('#root');

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      modalPic: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal(pic) {
    this.setState({ modalPic: pic, modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false, modalPic: null });
  }

  render() {

    return (
      <React.Fragment>
        <PaidModal
          isOpen={this.state.modalIsOpen}
          modalPicture={this.state.modalPic}
          onRequestClose={this.closeModal}
        />
        <ImageGrid openModal={this.openModal} />
      </React.Fragment>
    );
  }
}

export default App;
