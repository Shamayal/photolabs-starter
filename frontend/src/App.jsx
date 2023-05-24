import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';

import PhotoDetailsModal from './routes/PhotoDetailsModal';
// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    photos,
    setPhotos,
    topics,
    setTopics,
    topicPhotos,
    topicSelect,
    likePhoto,
    likedPhotos,
    openModal,
    closeModal,
    photoOpen,
    clickedPhotoId,
  } = useApplicationData(); 

  useEffect(() => {
    axios.get('/api/photos')
    .then(res => {
      setPhotos(res.data)
    })
  }, [])

  useEffect(() => {
    axios.get('/api/topics')
    .then(res => {
      setTopics(res.data)
    })
  }, [])

  return (
    <div className="App">
      <HomeRoute 
      photos={photos} 
      topics={topics}
      topicPhotos={topicPhotos}
      topicSelect={topicSelect}
      openModal={openModal} 
      likePhoto={likePhoto}
      likedPhotos={likedPhotos}/>

      {photoOpen && clickedPhotoId && <PhotoDetailsModal
      photos={photos}
      likePhoto={likePhoto}
      likedPhotos={likedPhotos}
      openModal={openModal}
      closeModal={closeModal}
      clickedPhotoId={clickedPhotoId}/>}
    </div>
  )
}

export default App