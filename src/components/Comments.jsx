import React from 'react';
import { Comment } from './Comment';

const Comments = ({ comments }) => {
  return (
    <div className="comment__field">
      {comments.map(({ id, value }) => (
        <Comment key={id} value={value} />
      ))}
    </div>
  );
};

export { Comments };
