import React from 'react';
import classnames from 'classnames';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';

import './styles.css';

type Props = {
  pictureSrc: any,
  onClick: () => void,
};

export const ImageCard = ({ pictureSrc, onClick }: Props) => {
  if (!pictureSrc) {
    return null;
  }
  else {
    const click = onClick ? () => () => onClick() : () => { };
    return (
      <Card classNames='image-card'>
        <CardActionArea>
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
        </CardActionArea>
      </Card>
    );
  }
}