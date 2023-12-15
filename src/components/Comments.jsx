import React from 'react';

const Comments = ({ comments }, randomColor) => {
  return (
    <div className="comment__field">
      {comments.map(({ id, value }) => (
        <div key={id} className="comment__wrapper">
          <div className={'comment__text ' + (randomColor ? 'random' : '')}>
            {value}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Comments };
