import React from "react";
import PropTypes from "prop-types";

import classes from "./SingleProductCard.module.css";
import RatingStars from "../RatingStars/RatingStars";
import Button from "../Button/Button";
import Card from "../Card/Card";

import Text from 'LoginPageMFE/Text'
import products from "../../../utils/products";


/**
 * Impliments ProductCard component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns ProductCard
 */

export const SingleProductCard = (props) => {
  const { price } = props;


  function handleClick(){
    alert ('added to cart')
  }

  return (
    <>
      {/* <div className={classes.container}>
        {props.example}
        <div className={classes.product}>
          <Card />
        </div>

        <div className={classes.text}>
          <h2>Seeds of Change Organic Quinoa, Brown</h2>
          <RatingStars rating={4} />

          <h2 className={classes.dollor}>{price}</h2>

          <div className={classes.content}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              rem officia, corrupti reiciendis minima nisi modi, quasi, odio
              minus dolore impedit fuga eum eligendi? Officia doloremque facere
              quia. Voluptatum, accusantium! Uninhibited carnally hired played
              in whimpered dear gorilla koala depending and much yikes off far
              quetzal goodness and from for grimaced goodness.
            </p>
          </div>

          <div className={classes.btn}>
            <Button />
          </div>
        </div>
      </div> */}

     


      {products.map((product)=>{
       const {id, productName, productImg, description}=product
       return (
        <div className={classes.productItems} key={id}>
    <div>
      <span>
        {description}
      </span>
      <h2>{productName}</h2>
      <img src={productImg}/>
      <Button onClick={handleClick}/>
    </div>
        </div>
       )
      }
      )}
  




      {/* <ProductCard /> */}
    </>
  );
};

/**
 * Property type definations
 *
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  price: PropTypes.string,
  // DollorImage: PropTypes.string
};

/**
 * Default values for ProductCard
 *
 * @type {object}
 * @property {string} example='ProductCard
 */

export const defaultProps = {
  price: "$38",
};

SingleProductCard.propTypes = propTypes;
SingleProductCard.defaultProps = defaultProps;

export default SingleProductCard;