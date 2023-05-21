
import React, {useState} from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  const { photoId , imageSource , description , user, city , country , likedPhotos , setLikedPhotos , photoClick, currPhotoId } = props;

  const clickedPhoto = () => {
    console.log("clicked", photoId)
    photoClick(true)
    currPhotoId(photoId)
  }

  return (
    <article className="photo-list--item">
        <PhotoFavButton photoId={photoId} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos}/>
        <img className="photo-list--image" src={imageSource} alt={description} onClick={clickedPhoto}/>
        
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