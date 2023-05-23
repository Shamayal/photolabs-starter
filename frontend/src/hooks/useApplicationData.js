import { useReducer } from "react";

export const ACTION = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_SELECT_PHOTO: 'CLOSE_SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

export default function useApplicationData() {

  const defaultState = {likedPhotos: [], photoOpen: false, clickedPhotoId: null}

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
      case "SELECT_PHOTO":
        // console.log(action.payload);
        return {
          ...state,
          photoOpen: action.payload.isOpen,
          clickedPhotoId: action.payload.clickedPhotoId
        }
      case "CLOSE_SELECT_PHOTO":
        return {
          ...state,
          photoOpen: action.payload.isOpen,
          clickedPhotoId: action.payload.clickedPhotoId
        }
    } 
  }

  const [state, dispatch] = useReducer(reducer, defaultState)

  const likePhoto = (photoId) => {
    if (state.likedPhotos.includes(photoId)) {
      dispatch({
        type: "FAV_PHOTO_REMOVED",
        payload: { id: photoId }
      })
    } else {
      dispatch({
        type: "FAV_PHOTO_ADDED",
        payload: { id: photoId}
      })
    }
  }
  // console.log(state.photoOpen)
  const openModal = (photoId) => {
    dispatch({
      type: "SELECT_PHOTO",
      payload: {isOpen: true, clickedPhotoId: photoId }
    })
  }
  
  const closeModal = () => {
    // console.log("dispatch")
    dispatch({
      type: "CLOSE_SELECT_PHOTO",
      payload: {isOpen: false, clickedPhotoId: null}
    })
  }

  return {
    likePhoto,
    likedPhotos: state.likedPhotos,
    openModal,
    closeModal,
    photoOpen: state.photoOpen,
    clickedPhotoId: state.clickedPhotoId,
  };
}