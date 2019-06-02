import React from 'react';

const Child = ({ setFocus }) => {
  return (
    <div>
      <button>Button 1</button>
      <button>Button 2</button>
      <button onClick={setFocus}>Focus First</button>
    </div>
  )
}

export default Child;