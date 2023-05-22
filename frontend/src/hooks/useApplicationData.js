import { useState , useReducer } from "react";

export const ACTION = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}
// const fakeState = {likedPhotos: []}

// function reducer(state, action) {
//   switch (action.type) {
//     case FAV_PHOTO_ADDED:
//       return {
//         ...state, 
//         likedPhotos: [...state.likedPhotos, action.payload.id]
//       }
//     case FAV_PHOTO_REMOVED:
//       return {
//         ...state, 
//         likedPhotos: state.likedPhotos.filter(id => id !== action.payload.id)
//       }
//   } 
// }


export default function useApplicationData() {

  const likeState = {likedPhotos: [], photoOpen: false}

  function reducer(state, action) {
    switch (action.type) {
      case "FAV_PHOTO_ADDED":
        return {
          ...state, 
          likedPhotos: [...state.likedPhotos, action.payload.id]
        }
      case "FAV_PHOTO_REMOVED":
        return {
          ...state, 
          likedPhotos: state.likedPhotos.filter(id => id !== action.payload.id)
        }
    } 
  }

  const [state, dispatch] = useReducer(reducer, likeState)

  
  const [photoOpen, setPhotoOpen] = useState(false);

  const [clickedPhotoId, setClickedPhotoId] = useState(null);
  
  // const [likedPhotos, setLikedPhotos] = useState([]);

  const likePhoto = (photoId) => {
    if (state.likedPhotos.includes(photoId)) {
      dispatch({
        type: "FAV_PHOTO_REMOVED",
        payload: { id: photoId }
      })
      // setLikedPhotos(currLikedPhotos => {return currLikedPhotos.filter(id => id !== photoId)})
    } else {
      dispatch({
        type: "FAV_PHOTO_ADDED",
        payload: { id: photoId}
      })
      // setLikedPhotos([...likedPhotos, photoId])
    }
  }
  
  // const closeModal = () => {
  //   setPhotoOpen(false);
  //   setClickedPhotoId(null);
  // };

  const closeModal = () => {
    dispatch({
      type: "DISPLAY_PHOTO_DETAILS",
      payload: { id }
    })
    setPhotoOpen(false);
    setClickedPhotoId(null);
  };

  return {
    photoOpen,
    setPhotoOpen,
    clickedPhotoId,
    setClickedPhotoId,
    likedPhotos: state.likedPhotos,
    closeModal,
    likePhoto
  };
}