import React, { useState } from 'react';
import { Comments } from './Comments';

const CommentInterface = () => {
  const [textareaText, setTextareaText] = useState('');
  const [comments, setComments] = useState([]);
  const [notFilled, setNotFilled] = useState(false);
  const [randomColor, setRandomColor] = useState(false);

  const addCommentHandler = () => {
    if (!textareaText == '') {
      const newComment = {
        id: Math.random(),
        value: textareaText,
      };
      setRandomColor(!randomColor);
      setComments([...comments, newComment]);
      setTextareaText('');
    } else setNotFilled(!notFilled);
  };

  return (
    <div>
      <Comments comments={comments} randomColor={randomColor} />
      <input
        className={'comment__input ' + (notFilled ? 'mistake' : '')}
        placeholder="Enter your comment here ..."
        value={textareaText}
        onChange={(e) => setTextareaText(e.target.value)}
      />
      <button className="comment__button" onClick={addCommentHandler}>
        Send
      </button>
    </div>
  );
};

export { CommentInterface };
