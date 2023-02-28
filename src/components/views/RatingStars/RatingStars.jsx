import React, {useState} from 'react'
import PropTypes from 'prop-types'

import  './RatingStars.css';






const RatingStars = () => {
  const [rating, setRating] = useState(0);
  // const [color, setColor] = useState('white');

  // const changeColor=()=>{
  //   if(color==='white'){
  //     setColor('yellow')
  //   }else{
  //     setColor('white')
  //   }
  // }


  const handleClick = (value) => {
    setRating(value);
  };



  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? "star active" : "star";

      stars.push(
        <span
          key={i}
          className={starClass}
          onClick={() => handleClick(i)}
        >
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="rating-stars" >
      {/* <h1 style={{color}} onClick={changeColor}>{RatingStars}</h1> */}

      {renderStars()}
      <p className="rating-text">{rating > 0 ? `You rated this ${rating} star${rating > 1 ? 's' : ''}.` : 'Please rate this.'}</p>
    </div>
  );
};






/**
 * Impliments RatingStars component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns RatingStars
 */










// const RatingStars = ({ rating }) => {
//   const stars = [];

//   for (let i = 1; i <= 5; i++) {
//     if (i <= rating) {
//       stars.push(<span key={i} className="star">&#9733;</span>);
//     } else {
//       stars.push(<span key={i} className="star">&#9734;</span>);
//     }
//   }

//   return <div>{stars}</div>;
// };






  
  
/**
 * Property type definations
 * 
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
    example: PropTypes.string
};


/**
 * Default values for RatingStars
 * 
 * @type {object}
 * @property {string} example='RatingStars 
 */

export const defaultProps = {
    example:'RatingStars'
};

RatingStars.propTypes = propTypes;
RatingStars.defaultProps = defaultProps;

export default RatingStars;