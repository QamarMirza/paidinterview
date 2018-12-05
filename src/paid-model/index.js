import React from 'react';
import Modal from 'react-modal';
import { ImageCard } from '../card-component/component'
import './styles.css';

export const PaidModal = ({ isOpen, onRequestClose, modalPicture }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal"
    >
      <div className='header' >
        Some title
    <button onClick={onRequestClose}>X</button>
      </div>
      <ImageCard pictureSrc={modalPicture} />
      <div className='content'>
        <div className='user' > Name: {modalPicture.user.name} </div>
        <div className='likes' > Likes: {modalPicture.likes} </div>
        <div className='comments' > Comments: {modalPicture.comments} </div>
      </div>
    </Modal>);
};