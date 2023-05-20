
import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {

  const { imageSource , description } = props;

  return (
    <article className="photo-list--item">
      <img className="photo-list--image" src={imageSource} alt={description} />
    </article>
  )
}

// PhotoListItem.defaultProps = {
//   username: 'Jacob',
//   imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//   id: 1,
//   hideUserName: false,
// }

export default PhotoListItem