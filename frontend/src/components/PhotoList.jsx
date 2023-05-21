import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const { photos , likedPhotos, setLikedPhotos , photoClick, currPhotoId } = props;

  const photosParsedComponents = photos.map(photo => {
    return (
      <PhotoListItem 
        key={photo.id}
        photoId={photo.id}
        imageSource={photo.urls.regular}
        description={photo.description}
        user={photo.user.name}
        city={photo.location.city}
        country={photo.location.country}
        likedPhotos={likedPhotos}
        setLikedPhotos={setLikedPhotos}
        photoClick={photoClick}
        currPhotoId={currPhotoId}
      />
    )
  })

  return (
    <ul className="photo-list">
      {photosParsedComponents}
    </ul>
  )
}

// PhotoList.defaultProps = {
//   photos: [
//     {
//      username: 'Jacob',
//      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//      id: 1,
//      hideUserName: false,
//     },
//     {
//      username: 'Jacob',
//      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//      id: 2,
//      hideUserName: false,
//     },
//     {
//      username: 'Jacob',
//      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//      id: 3,
//      hideUserName: false,
//     }
//    ]
// }

export default PhotoList;