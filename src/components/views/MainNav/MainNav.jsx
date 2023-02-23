import React from 'react'
import PropTypes from 'prop-types'

import classes from './MainNav.module.scss'
import Button from '../Button/Button'



/**
 * Impliments MainNav component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns MainNav
 */

export const MainNav = (props) => {
    return (
        <div className={classes.container}>
        <Button/>     first hot deals Home    Vegetables  Drink Cookies Meat & Seafood & bakery
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
 * Default values for MainNav
 * 
 * @type {object}
 * @property {string} example='MainNav 
 */

export const defaultProps = {
    example:'MainNav'
};

MainNav.propTypes = propTypes;
MainNav.defaultProps = defaultProps;

export default MainNav;