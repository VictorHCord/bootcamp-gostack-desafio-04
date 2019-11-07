import React from 'react';

function AllPost({ post }) {
  const {author , date , content, comments } = post;

  return (
    <div className="container">
      <div className="control-content">
      <img src={author.avatar} />
      <span className="date">{date}</span>
      <span className="name">{author.name}</span>
      <p className="content">{content}</p>
      <PostComments comments={comments} />
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}


export default AllPost;