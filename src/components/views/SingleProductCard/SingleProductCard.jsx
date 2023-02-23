import React from "react";
import PropTypes from "prop-types";

import classes from "./SingleProductCard.module.css";
import RatingStars from "../RatingStars/RatingStars";
import Button from "../Button/Button";
import Card from "../Card/Card";

/**
 * Impliments ProductCard component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns ProductCard
 */

export const SingleProductCard = (props) => {
  const { price } = props;

  return (
    <>
      <div className={classes.container}>
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
      </div>

      <div className={classes.description}>
        <div className={classes.header}>
          <h1 className={classes.head}>Description</h1>
          <h1 className={classes.Add}>Additional info</h1>
          <h1 className={classes.review}>Reviews (3)</h1>
        </div>

        <p className={classes.para}>
          Uninhibited carnally hired played in whimpered dear gorilla koala
          depending and much yikes off far quetzal goodness and from for
          grimaced goodness unaccountably and meadowlark near unblushingly
          crucial scallop tightly neurotic hungrily some and dear furiously this
          apart. Spluttered narrowly yikes left moth in yikes bowed this that
          grizzly much hello on spoon-fed that alas rethought much decently
          richly and wow against the frequent fluidly at formidable acceptably
          flapped besides and much circa far over the bucolically hey precarious
          goldfinch mastodon goodness gnashed a jellyfish and one however
          because.
        </p>
        <h1 className={classes.head1}>Packaging & Delivery</h1>
        <p className={classes.para1}>
          Less lion goodness that euphemistically robin expeditiously bluebird
          smugly scratched far while thus cackled sheepishly rigid after due one
          assenting regarding censorious while occasional or this more crane
          went more as this less much amid overhung anathematic because much
          held one exuberantly sheep goodness so where rat wry well
          concomitantly
        </p>
        <div className={classes.table}>
          <div className={classes.group}>
            <ul>
              <li>
                <h5 className={classes.li1}>Type Of Packing</h5>
                <h5 className={classes.li2}>Color</h5>
                <h5 className={classes.li3}>Quantity Per Case</h5>
                <h5 className={classes.li4}>Fat percentage</h5>
                <h5 className={classes.li5}>Piece In One</h5>




              </li>

            </ul>
          </div>
          <div className={classes.frame}>
            <ul>
            <li>
            <h5 className={classes.fr1}>Paper wrapping</h5>
            <h5 className={classes.fr2}>Green, Pink, Brown</h5>
            <h5 className={classes.fr3}>500g</h5>
            <h5 className={classes.fr4}>56%</h5>
            <h5 className={classes.fr5}>cartoon</h5>





            </li>
            </ul>
          </div>
        </div>
        <p className={classes.para2}>
          Scallop or far crud plain remarkably far by thus far iguana lewd
          precociously and and less rattlesnake contrary caustic wow this near
          alas and next and pled the yikes articulate about as less cackled
          dalmatian in much less well jeering for the thanks blindly sentimental
          whimpered less across objectively fanciful grimaced wildly some wow
          and rose jeepers outgrew lugubrious luridly irrationally attractively
          dachshund.
        </p>
        <h1 className={classes.head1}>Suggested Use</h1>
        <h1 className={classes.para3}>
           Refrigeration not necessary.

             Stir before serving
         </h1>
        <h1 className={classes.head2}>Other Ingredients</h1>
        <p className={classes.para4}>Organic raw pecans, organic raw cashews. This butter was produced using a LTG (Low Temperature Grinding) process. Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>
        <h1 className={classes.head3}>Warnings</h1>
        <p className={classes.para5}>Oil separation occurs naturally. May contain pieces of shell.</p>
      </div>
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
