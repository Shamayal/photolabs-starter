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
    app,
    setApp,
    photoOpen,
    setPhotoOpen,
    clickedPhotoId,
    setClickedPhotoId,
    likedPhotos,
    closeModal,
    likePhoto,
  } = useApplicationData(); 
  console.log(likedPhotos)
  // const [photoOpen, setPhotoOpen] = useState(false);
  // const [clickedPhotoId, setClickedPhotoId] = useState(null);
  // const [likedPhotos, setLikedPhotos] = useState([]);

  // console.log("value of photoOpen: ", photoOpen)
  // console.log("value of clickedPhotoId: ", clickedPhotoId)

  // console.log("array of liked photos", likedPhotos)

  // const closeModal = () => {
  //   setPhotoOpen(false);
  //   setClickedPhotoId(null);
  // };

  return (
    <div className="App">
      <HomeRoute 
      photos={photos} 
      topics={topics} 
      photoClick={setPhotoOpen} 
      currPhotoId={setClickedPhotoId} 
      likedPhotos={likedPhotos} 
      likePhoto={likePhoto}/>

      {photoOpen && <PhotoDetailsModal 
      clickedPhotoId={clickedPhotoId} 
      closeModal={closeModal} 
      photos={photos} 
      likedPhotos={likedPhotos} 
      likePhoto={likePhoto}/>}
    </div>
  )
}

export default App