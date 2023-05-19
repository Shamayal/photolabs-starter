
import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  return (
    <article>
      <img src={props.imageSource} alt="skiing in the mountains" />
    </article>
  )
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem