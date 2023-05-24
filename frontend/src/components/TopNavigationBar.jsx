import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  const {
    topics,
    likedPhotos,
    topicSelect,
    homepage,
    getLikedPhotos
  } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo" onClick={homepage}>PhotoLabs</span>
      <TopicList topics={topics} topicSelect={topicSelect}/>
      <FavBadge isFavPhotoExist={likedPhotos.length >= 1 ? true : false} onClick={() => getLikedPhotos(likedPhotos)} />
    </div>
  )
}

export default TopNavigation;