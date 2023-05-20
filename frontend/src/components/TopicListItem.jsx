import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {

  const { link , title } = props;

  return (
    <div className="topic-list--item">
      <a href={link}><span>{title}</span></a>
    </div>
  )
}

// TopicListItem.defaultProps = {
//   id: 1,
//   label: 'Nature',
//   link: 'link placeholder' 
// }
export default TopicListItem