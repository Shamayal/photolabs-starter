import React from 'react';

import './App.scss';
import PhotoFavButton from './components/PhotoFavButton';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  return (
    <div className="App">
      <HomeRoute />
      {/* <TopNavigationBar />
      <PhotoList />
      <PhotoFavButton /> */}
    </div>
  )
}

export default App