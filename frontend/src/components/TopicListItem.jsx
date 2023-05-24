import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {

  const {
    title,
    topicId,
    topicSelect
  } = props;

  return (
    <div className="topic-list--item" onClick={() => topicSelect(topicId)}>
      <span>{title}</span>
    </div>
  )
}

// TopicListItem.defaultProps = {
//   id: 1,
//   label: 'Nature',
//   link: 'link placeholder' 
// }
export default TopicListItem