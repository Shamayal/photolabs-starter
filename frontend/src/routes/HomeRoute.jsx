import React, { useCallback, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics , photoClick, currPhotoId } = props;

  // array for liked photos
  const [likedPhotos, setLikedPhotos] = useState([]);

  // console.log(likedPhotos)

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} likedPhotos={likedPhotos}/>
      <PhotoList photos={photos} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} photoClick={photoClick} currPhotoId={currPhotoId} />
    </div>
  )
}

export default HomeRoute;