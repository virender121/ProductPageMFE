import React, {useState} from 'react'
import PropTypes from 'prop-types'
// import {AiOutlineStar} from 'react-icons/ai';
// import {FaStarHalfAlt} from 'react-icons/fa';
//   import  {FaStar} from 'react-icons/fa'

import  './RatingStars.css';



/**
 * Impliments RatingStars component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns RatingStars
 */





// const RatingStars = (props) => {

//   const {rating } = props;
  
//     return (
//       <div>
//         {[...Array(5)].map((_, i) => {
//           const ratingValue = i + 1;
//           {console.log(i)}

//           return (
//             <span
//               key={ratingValue}
//               className={ratingValue <= rating ? 'selected' : 'not-selected'}
//  >
//               <div className='star'>
//               <span key={i}>
//            {ratingValue>= i+1 ? (
//               <img src='file:///C:/Users/hp/Downloads/001-star%205.svg' alt='filled star'/>
             
//            ):(
//               <img src='file:///C:/Users/hp/Downloads/001-star%201.svg' alt='empty star'/>
                 
//             )
//            }
//           </span>
             
//               </div>
//             </span>
//           )
//         })}
//       </div>
//     )
//   }







// const RatingStars=({stars, review})=> {
//    const RatingStars= Array.from({length:5},(elem,index)=>{
//         let number= index + 0.5;
        
//         return(
//             <span key={index}>
//           {stars>= index+1 ? (
//             <FaStar />
//           ): stars >= number ? (
//             <FaStarHalfAlt />) : (
//                 <AiOutlineStar className='star' />
//             )
//           }
//             </span>

//         )

//     })
//     return (
//         <wrapper>
//             <div>
//                 {RatingStars}
//                 {/* <p>{reviews}</p> */}
//                  {/* console.log(RatingStars) */}
//             </div>
//         </wrapper>
//     )
// }


const RatingStars = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="star">&#9734;</span>);
    }
  }

  return <div>{stars}</div>;
};






  
  
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