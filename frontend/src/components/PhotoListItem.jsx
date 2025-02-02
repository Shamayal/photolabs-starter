
import React, {useState} from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  const {
    photoId,
    imageSource,
    description,
    user,
    userProfile,
    city,
    country,
    likePhoto,
    likedPhotos,
    openModal,
  } = props;

  return (
    <article className="photo-list--item">
        <PhotoFavButton photoId={photoId} likePhoto={likePhoto} likedPhotos={likedPhotos} />
        <img className="photo-list--image" src={imageSource} alt={description} onClick={() => openModal(photoId)} />
        
      <div className="photo-list--user-details">
        <img className="photo-list--user-profile" src={userProfile} />
        <div className="photo-list--user-info">
          {user}
          <div className="photo-list--user-location">
            {city}, {country}
          </div>
        </div>
      </div>
    </article>
  )
}

// PhotoListItem.defaultProps = {
//   username: 'Jacob',
//   imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//   id: 1,
//   hideUserName: false,
// }

export default PhotoListItem