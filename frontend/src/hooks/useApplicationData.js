import { useState } from "react";

export default function useApplicationData() {
  
  const [photoOpen, setPhotoOpen] = useState(false);

  const [clickedPhotoId, setClickedPhotoId] = useState(null);
  
  const [likedPhotos, setLikedPhotos] = useState([]);
  
  const closeModal = () => {
    setPhotoOpen(false);
    setClickedPhotoId(null);
  };

  return { photoOpen , setPhotoOpen , clickedPhotoId , setClickedPhotoId , likedPhotos , setLikedPhotos , closeModal };
}