import React from 'react';
import classnames from 'classnames';

import './styles.css';

export const ImageCard = ({ pictureSrc, onClick }: any) => {
  if (!pictureSrc) {
    return null;
  }
  else {
    const click = onClick ? () => () => onClick() : () => { };
    return (
      < div
        className={classnames('image-container-items')}
        onClick={click()}
      >
        <img
          src={pictureSrc.picture}
          alt=""
          className={classnames('image-container-items-image')}
        />
      </div >
    );
  }
}