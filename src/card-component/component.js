import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import classnames from 'classnames';

import './styles.css';

export const ImageCard = ({ pictureSrc }: any) => (

  <CardMedia
    image={pictureSrc}
    className={classnames('image-container-items')}
  >
  </CardMedia>

);