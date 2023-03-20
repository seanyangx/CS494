import React from 'react';

const Details = ({ item }) => {
  if (!item) {
    return <div className="details">Select an item from the list</div>;
  }

  return (
    <div className="details">
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
  );
};

export default Details;