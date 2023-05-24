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
    likedPhotos,
    homepage,
    // getLikedPhotos
  } = props;

  return (
    <div className="home-route" style={{backgroundColor: "#F5F5F5"}}>
      <TopNavigationBar 
      topics={topics} 
      likedPhotos={likedPhotos}
      topicSelect={topicSelect}
      homepage={homepage}
      // getLikedPhotos={getLikedPhotos}
      />

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