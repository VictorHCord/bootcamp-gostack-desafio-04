import React from 'react';

function AllPost({ post }) {
  const {author , date , comment} = post;

  return (
    <div className="container">
      <div className="control-content">
      <img src={author.avatar} />
      <span className="date">{date}</span>
      <span className="name">{author.name}</span>
      </div>
    </div>

  );
}

export default AllPost;