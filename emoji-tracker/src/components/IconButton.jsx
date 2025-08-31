import React from "react";

const IconButton = ({ mood, count, increment }) => {
  return (
    <>
      <button onClick={increment} aria-label={`Select mood ${mood}`}>
        {mood}
      </button>
      <p>{count}</p>
    </>
  );
};

export default IconButton;
