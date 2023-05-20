import React, { useCallback, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  const { photos, topics } = props;

  const [likedPhotos, setLikedPhotos] = useState([]);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} likedPhotos={likedPhotos}/>
      <PhotoList photos={photos} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos}/>
    </div>
  )
}

export default HomeRoute;