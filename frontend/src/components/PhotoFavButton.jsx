import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const {
    photoId,
    likePhoto,
    likedPhotos
  } = props;

  return (
    <div className="photo-list--fav-icon" onClick={() => likePhoto(photoId)} >
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill={likedPhotos.includes(photoId) ? "#C80000" : "#none"} />
      </div>
    </div>
  );
}

export default PhotoFavButton;