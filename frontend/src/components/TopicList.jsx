import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {

  const topicsParsedComponents = props.topics.map((topic) => {
    return (
      <TopicListItem
      key={topic.id}
      title={topic.title}
      link={topic.link}
      />
    )
  })

  return (
    <div className="top-nav-bar--topic-list">
      {topicsParsedComponents}
    </div>
  ) 
}

// TopicList.defaultProps = {
//   topics: [
//     {
//       id: 1,
//       label: 'Nature',
//       link: 'link placeholder' 
//     },
//     { 
//       id: 2, 
//       label: 'Food',
//       link: 'link placeholder' 
//     },
//     {
//       id: 3,
//       label: 'People',
//       link: 'link placeholder' 
//     },
//   ]
// }
export default TopicList