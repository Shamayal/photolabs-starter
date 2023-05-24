import React, { useCallback, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  const { 
    photos,
    topics,
    topicSelect,
    topicPhotos,
    openModal,
    likePhoto,
    likedPhotos
  } = props;

  return (
    <div className="home-route" style={{backgroundColor: "#F5F5F5"}}>
      <TopNavigationBar 
      topics={topics} 
      likedPhotos={likedPhotos}
      topicSelect={topicSelect}/>

      <PhotoList 
      photos={photos}
      topicPhotos={topicPhotos}
      likePhoto={likePhoto}
      likedPhotos={likedPhotos}
      openModal={openModal}/>
    </div>
  )
}

export default HomeRoute;