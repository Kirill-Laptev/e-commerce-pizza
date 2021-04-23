import React from 'react';

const Categories = ({ items, onCategoryClick, categoryActiveIndex }) => {
  

  return (
    <div className='categories'>
      <ul>
        <li className={categoryActiveIndex === null ? 'active' : ''} onClick={() => onCategoryClick(null)}>Все</li>
        {items &&
          items.map((name, index) => {
            return (
              <li key={name}
                className={index === categoryActiveIndex ? 'active' : ''}
                onClick={() => onCategoryClick(index)}>
                {name}
              </li>)})}
      </ul>
    </div>
  );
};

export default Categories;
