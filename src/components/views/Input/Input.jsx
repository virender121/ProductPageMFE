import React from 'react'
import PropTypes from 'prop-types'

import classes from './Input.module.scss';



/**
 * Impliments Input component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Input
 */

export const Input = (props) => {
    return (
        <div className={classes.container}>
            {props.example}
            <input/>
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
    example: PropTypes.string
};

/**
 * Default values for Input
 * 
 * @type {object}
 * @property {string} example='Input 
 */

export const defaultProps = {
    example:'Input'
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;