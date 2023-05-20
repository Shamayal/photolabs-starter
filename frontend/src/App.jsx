import React from 'react';

import './App.scss';
import PhotoFavButton from './components/PhotoFavButton';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  return (
    <div className="App">
      <TopicList />
      <PhotoList />
      <PhotoFavButton />
    </div>
  )
}

export default App