import React from 'react';

import './App.scss';
import PhotoFavButton from './components/PhotoFavButton';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';

import photos from './mocks/photos.json';
import topics from './mocks/topics.json';
// Note: Rendering a single component to build components in isolation
const App = () => {
  
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics}/>
      {/* <TopNavigationBar />
      <PhotoList />
      <PhotoFavButton /> */}
    </div>
  )
}

export default App