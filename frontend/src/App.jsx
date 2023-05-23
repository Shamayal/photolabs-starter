import React from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData'; 

import photos from './mocks/photos.json';
import topics from './mocks/topics.json';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    likePhoto,
    likedPhotos,
    openModal,
    closeModal,
    photoOpen,
    clickedPhotoId    
  } = useApplicationData(); 

  return (
    <div className="App">
      <HomeRoute 
      photos={photos} 
      topics={topics} 
      openModal={openModal} 
      likePhoto={likePhoto}
      likedPhotos={likedPhotos}/>

      {photoOpen && clickedPhotoId && <PhotoDetailsModal
      photos={photos}
      likePhoto={likePhoto}
      likedPhotos={likedPhotos}
      closeModal={closeModal}
      clickedPhotoId={clickedPhotoId}/>}
    </div>
  )
}

export default App