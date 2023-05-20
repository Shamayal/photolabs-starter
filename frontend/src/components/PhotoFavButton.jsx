import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton() {

  const [like, setLike] = useState("unliked");

  const handleClick = () => {
    setLike((like === "liked") ? "unliked" : "liked");
  }
  // console.log("button state is " + like)


  return (
    // <div className="photo-list--fav-icon">
    //   <div className="photo-list--fav-icon-svg">
    //     {/* Insert React */}
    //   </div>
    // </div>
    <button onClick={handleClick} className="photo-list--fav-icon">
      {like === "liked" ? <FavBadge /> : <FavIcon />}
    </button>
  );
}

export default PhotoFavButton;