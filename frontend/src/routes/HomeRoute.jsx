import React, { useCallback, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics , photoClick, currPhotoId, likedPhotos, setLikedPhotos } = props;

  // array for liked photos
  // console.log(likedPhotos)

  return (
    <div className="home-route" style={{backgroundColor: "#F5F5F5"}}>
      <TopNavigationBar topics={topics} likedPhotos={likedPhotos}/>
      <PhotoList photos={photos} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} photoClick={photoClick} currPhotoId={currPhotoId}/>
    </div>
  )
}

export default HomeRoute;