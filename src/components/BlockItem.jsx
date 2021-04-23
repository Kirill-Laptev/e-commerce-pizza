import React, { useState } from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';

const BlockItem = ({id, imageUrl, name, price, sizes, types, onAddProduct, addedProductCount}) => {

    BlockItem.propTypes = {
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
        types: PropTypes.arrayOf(PropTypes.number).isRequired
    }

    const allProductSizes = [26, 30, 40];
    const allProductWidth = ['тонкое', 'традиционное'];
    const [activeSize, setActiveSize] = useState(sizes[0]);
    const [activeWidth, setActiveWidth] = useState(types[0])
    const size = allProductSizes[activeSize];
    const width = allProductWidth[activeWidth];

    const onSizeClick = (index) => {
        setActiveSize(index)
    }

    const onWidthClick = (index) => {
        setActiveWidth(index)
    }


    return (
        <div className="pizza-block">
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
          />
          <h4 className="pizza-block__title">{name}</h4>
          <div className="pizza-block__selector">
            <ul>
              {allProductWidth.map((width, index) => {
                  return <li key={width} className={classNames({
                      active: activeWidth === index,
                      disabled: !types.includes(index)
                  })}
                  onClick={() => onWidthClick(index)}>{width}</li>
              })}
            </ul>
            <ul>
              {allProductSizes.map((size, index) => {
                  return <li key={size}
                  className={classNames({
                      active: activeSize === index,
                      disabled: !sizes.includes(size)
                  })}
                  onClick={() => onSizeClick(index)}>{size} см.</li>
              })}
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {price} ₽</div>
            <div className={classNames("button button--outline", {
              'button--add': addedProductCount
            })}
            onClick={() => onAddProduct({id, imageUrl, name, price, size, width})}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
            <i>{addedProductCount}</i>
            </div>
          </div>
        </div>
    )
}

export default BlockItem
