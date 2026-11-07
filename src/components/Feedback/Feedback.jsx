import React from 'react';

export default function Feedback({ title, good, neutral, bad }) {
  return (
    <div>
      <span>{title}</span>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </div>
  );
}
