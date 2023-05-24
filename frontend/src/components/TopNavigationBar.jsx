import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  const {
    topics,
    likedPhotos,
    topicSelect
  } = props;

  return (
    <div className="top-nav-bar">
      <a href='/api/photos'>
        <span className="top-nav-bar--logo">PhotoLabs</span>
      </a>
      <TopicList topics={topics} topicSelect={topicSelect}/>
      <FavBadge isFavPhotoExist={likedPhotos.length >= 1 ? true : false}/>
    </div>
  )
}

export default TopNavigation;