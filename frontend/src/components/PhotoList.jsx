import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const {
    photos,
    topicPhotos,
    likePhoto,
    likedPhotos,
    openModal
  } = props;

  // returns a list of photos depending on if a topic is selected and has an array of photos 
  const photosParsedComponents = 
  (topicPhotos && topicPhotos.length > 0) ?
  topicPhotos.map(photo => {
    return (
      <PhotoListItem
      key={photo.id}
      photoId={photo.id}
      imageSource={photo.urls.regular}
      description={photo.description}
      user={photo.user.name}
      userProfile={photo.user.profile}
      city={photo.location.city}
      country={photo.location.country}
      likePhoto={likePhoto}
      likedPhotos={likedPhotos}
      openModal={openModal}
      />
    )
  })
  :
  photos.map(photo => {
    return (
      <PhotoListItem
      key={photo.id}
      photoId={photo.id}
      imageSource={photo.urls.regular}
      description={photo.description}
      user={photo.user.name}
      userProfile={photo.user.profile}
      city={photo.location.city}
      country={photo.location.country}
      likePhoto={likePhoto}
      likedPhotos={likedPhotos}
      openModal={openModal}
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