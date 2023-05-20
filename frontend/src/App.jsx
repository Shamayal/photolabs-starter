import React from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';

import photos from './mocks/photos.json';
import topics from './mocks/topics.json';
// Note: Rendering a single component to build components in isolation
const App = () => {
  
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics}/>
    </div>
  )
}

export default App