import React from 'react'
import PropTypes from 'prop-types'

import classes from './Card.module.css';



/**
 * Impliments card component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Card
 */

export const Card = (props) => {
    const {Mango, orange, lemmon, strawberry}=props
    return (
        <div className={classes.container}>
            
            <img className={classes.cardmango} src={Mango}/>
            <img className={classes.cardorange} src={orange}/>
            <img className={classes.strawberry} src={strawberry}/>
            <img className={classes.lemmon} src={lemmon}/>

            

        </div>
    )
}

/**
 * Property type definations
 * 
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
    example: PropTypes.string,
    Mango: PropTypes.string,
    strawberry: PropTypes.string,
    orange: PropTypes.string,
    lemmon: PropTypes.string
   


};

/**
 * Default values for Card
 * 
 * @type {object}
 * @property {string} example='Card 
 */

export const defaultProps = {
    example:'Card',
    Mango: 'https://s3-alpha-sig.figma.com/img/17d8/db7f/3d627d5dff7a21f5589732970e0ecc60?Expires=1678060800&Signature=EXOBrCKBemRADH9XqLcyRqf9sQ2rLGTsUDvoyUqRoiSzkp5C7xqhrrzY5OcMYp6-c6PUpIQT8I1ti4FkKLgZhRONLwQxSOXcnqz3yOFpf73IIzUwC-2md5zZ4kfE~sMcy2gAcKs5R7bvfVLpw~VJelYwBADyOx8Xl5NmKwtmG39tUspeq2eEt1OBe~GFI5BcTwbCUtGBMTQFJmImVAMJO9J~AePOnjw6~Ao3PKDU0VksS1D16b6IWcLTSE-gWtPWttiITSDbrzWw~h-Cr1Ub4h59aNHGVLN07oGhRWeP3HuJtHvN1KNSBE3W9fiPnfuwcRrYuj8jakMka575PPpwrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    orange: 'https://s3-alpha-sig.figma.com/img/8b45/4a65/7d09e0d193461fe0cf5fe4d9cba8cad9?Expires=1678060800&Signature=Va5N39~Yc~6nWIqok7YY36tRpKzlJknk-3FF5wGHWIVa370p8r9iqBkQSpsFKvHHuu75i5VVLtA7yK44o9DyyJ076X8KFvJl1T-YsNg1I2OtyoE3Aa0LyAa6848Ke4sNW1R9jKlwyx0S~Yl7F60bAgUIPVUvzrzLDWdH1T6Mq38pZP7vw2tIr1iEN-obgNQNx3fKmodvKdRMemqtP0kKqvPigh7qElOs15qd3Y3-yZ0F6a05rHtyAGjqMvPN7ndipEUOuDbbniXM4HlVkOZUY2XMunvfvKrAa5eHLsSJmCTiCH~KOamMATpDAlzFHeiseqcSkAeDA5X8M8-IUscNkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    strawberry:'https://s3-alpha-sig.figma.com/img/ee52/37e4/51e4761f694cc93971465de108e62d06?Expires=1678060800&Signature=qESJUBD07ls~6qTlgz08YoTAjLkFVJJ~W8MUVArvlwNsKJxjb20cqygXsu11JEs2IyFuOQIxdVbkjV6ghbe5X-dFX3XI~SPrICuHoE~r5rSJ9mutS5XMK5TJFfV4L0moMKNgfZ1yJdjRd43Z44OKyt3h6KuRrPegfJdTwUYJQcea86pinH6vWnfvQlBgYIW0PlnH1kN6FB-7UbjkqRiPoJ48o-dQN7QmovqhVHeydjZWHVGhv7Icg0Yak0-CDqU-620LuAms4Pd-OKQoIe9Y3RkFrM0HnFH801daovgPKxKpEUEJGTfROGjm-QC9dlZBkAcMDgKOVVrtFoRucX6VNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    lemmon: 'https://s3-alpha-sig.figma.com/img/2d48/0a8f/210cdb0f5871f9d6dc633450452ab720?Expires=1678060800&Signature=HmuVnENyCxCRRVqvSDYVFVlBd-6Xd7ZegcZ1Wk0yotEE0VHaoXTjqkLvOTbXltK6lb0p0kmY9u4IuTNUMFgoGWEqQ7Dyzq6LTncFBh8N-qpGONbTaBZs~pMIFm6gASFpan1oEr-M3lb1WVR0a5o7JEfHci6KMxkF5gimG1JNmWphsSSR9QIvjDKnAQKc1MM0Ue3FOyzflsuS8e1VYM6gWCXpXIvaHHtxUk9M8KUZiJ8BXKWruFeUJ-FT0ArV3MYpvLa8mSeBHSZEJAs9csyNzTPNgurS8vaKKuCvNG~zvUEQ9iss2PKE5IPEtyBp0M80m8LLycfW3iLREex2AzxQlg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
};


Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;