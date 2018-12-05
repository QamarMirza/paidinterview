import React from 'react';
import { ImageCard } from '../card-component/component';
import mockData from '../data.json';

export const ImageGrid = ({ openModal }) => (
  <div className={'image-container'} >
    {
      mockData.map((picture, i) => (
        <ImageCard
          key={i}
          pictureSrc={picture}
          onClick={() => openModal(picture)}
        />
      ))
    }
  </div >
);