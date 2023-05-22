import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = (props) => {
  const { clickedPhotoId , closeModal , photos , likedPhotos, setLikedPhotos } = props;

  const photoSrc = photos.find(photo => photo.id === clickedPhotoId);

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={closeModal}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>

      <div className="photo-details-modal--images" style={{backgroundColor: "white"}}>
        <div>
          <div className="photo-details-modal--image-container">
            <PhotoFavButton photoId={clickedPhotoId}likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos}/>
            <img className="photo-details-modal--image" src={photoSrc.urls.small}></img>
          </div>
          
          <div className="photo-list--user-details">
            <img className="photo-list--user-profile" src={photoSrc.urls.small} />
            <div className="photo-list--user-info">{photoSrc.user.name}
              <div className="photo-list--user-location">{photoSrc.location.city}, {photoSrc.location.country}</div>
            </div>
          </div>
        </div>
          
        
        <header className="photo-details-modal--header">Similar Photos</header>
        <PhotoList photos={photos} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} />
      </div>

    </div>
  )
}

export default PhotoDetailsModal;