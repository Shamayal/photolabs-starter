
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  const { key, imageSource , description , user, city , country , likedPhotos , setLikedPhotos } = props;

  return (
    <article className="photo-list--item">
      <div>
        <PhotoFavButton  key={key} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos}/>
      </div>
      <img className="photo-list--image" src={imageSource} alt={description} />

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