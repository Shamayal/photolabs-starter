import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { photoId, likedPhotos , setLikedPhotos } = props;

  const likePhoto = () => {
    if (likedPhotos.includes(photoId)) {
      setLikedPhotos(currLikedPhotos => {return currLikedPhotos.filter(id => id !== photoId)})
    } else {
      setLikedPhotos([...likedPhotos, photoId])
    }
  }

  console.log("here", likedPhotos.includes(photoId))

  return (
    <div className="photo-list--fav-icon" onClick={likePhoto} >
      <div className="photo-list--fav-icon-svg">
        <FavIcon fill={likedPhotos.includes(photoId) ? "#C80000" : "#none"} />
      </div>
    </div>
  );
}

export default PhotoFavButton;