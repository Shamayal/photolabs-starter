import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';

import photos from './mocks/photos.json';
import topics from './mocks/topics.json';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
// Note: Rendering a single component to build components in isolation
const App = () => {

  const [photoOpen, setPhotoOpen] = useState(false);
  const [clickPhotoId, setClickPhotoId] = useState(null);

  const photoClick = (photoId) => {
    setPhotoOpen(true);
    setClickPhotoId(photoId)
    console.log("clicked on photo id: ", photoClick)
  }
  
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} photoClick={photoClick}/>
      {photoOpen && <PhotoDetailsModal photoClick={photoClick}/>}
    </div>
  )
}

export default App