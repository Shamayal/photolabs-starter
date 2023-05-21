import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';

import photos from './mocks/photos.json';
import topics from './mocks/topics.json';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
// Note: Rendering a single component to build components in isolation
const App = () => {

  const [photoOpen, setPhotoOpen] = useState(false);
  const [clickedPhotoId, setClickedPhotoId] = useState(null);

  console.log("value of photoOpen: ", photoOpen)
  console.log("value of clickedPhotoId: ", clickedPhotoId)

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} photoClick={setPhotoOpen} currPhotoId={setClickedPhotoId}  />
      {photoOpen && <PhotoDetailsModal clickedPhotoId={clickedPhotoId} />}
    </div>
  )
}

export default App