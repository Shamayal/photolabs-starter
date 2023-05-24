import { useReducer, useState } from "react";
import axios from 'axios';

export const ACTION = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_SELECT_PHOTO: 'CLOSE_SELECT_PHOTO',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
}

export default function useApplicationData() {

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  const defaultState = {likedPhotos: [], photoOpen: false, clickedPhotoId: null, topicPhotos: []}

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
      case "GET_PHOTOS_BY_TOPICS":
        return {
          ...state,
          topicPhotos: action.payload
        }
    } 
  }

  const [state, dispatch] = useReducer(reducer, defaultState)

  // add and remove likes from a photo
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

  // open a photo modal
  const openModal = (photoId) => {
    dispatch({
      type: "SELECT_PHOTO",
      payload: {isOpen: true, clickedPhotoId: photoId }
    })
  }
  
  // close a photo modal 
  const closeModal = () => {
    dispatch({
      type: "CLOSE_SELECT_PHOTO",
      payload: {isOpen: false, clickedPhotoId: null}
    })
  }

  // get photos based on topic selected
  const topicSelect = (topicId) => {
    let axiosReq = axios.get(`/api/topics/photos/${topicId}`);
    axiosReq.then(res => {
      dispatch({
        type: "GET_PHOTOS_BY_TOPICS",
        payload: res.data
      })
    })
  }

  return {
    photos,
    setPhotos,
    topics,
    setTopics,
    likePhoto,
    likedPhotos: state.likedPhotos,
    openModal,
    closeModal,
    photoOpen: state.photoOpen,
    clickedPhotoId: state.clickedPhotoId,
    topicSelect,
    topicPhotos: state.topicPhotos
  };
}