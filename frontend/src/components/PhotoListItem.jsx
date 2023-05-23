
import React, {useState} from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  const { photoId , imageSource , description , user, city , country , likedPhotos , likePhoto , photoClick, currPhotoId } = props;

  return (
    <article className="photo-list--item">
        <PhotoFavButton photoId={photoId} likedPhotos={likedPhotos} likePhoto={likePhoto}/>
        <img className="photo-list--image" src={imageSource} alt={description} onClick={() => photoClick(photoId)}/>
        
      <div className="photo-list--user-details">
        <img className="photo-list--user-profile" src={imageSource} />
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