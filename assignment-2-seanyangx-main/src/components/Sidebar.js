import React from 'react';

const Sidebar = ({ items, onItemClick }) => {
  return (
    <div className="sidebar">
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => onItemClick(index)}>
            {item.name || item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;