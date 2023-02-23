import React from "react";
import PropTypes from "prop-types";

import { OutlinedInput, InputAdornment } from "@mui/material";



/**
 * Impliments Header component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Header
 */

export const Header = (props) => {
  return (
    <>
   
  
  
    </>
  );
};


const MuiInput = (props) => {
    return <OutlinedInput {...props}/>
}
/**
 * Property type definations
 *
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  example: PropTypes.string,
};

/**
 * Default values for Header
 *
 * @type {object}
 * @property {string} example='Header
 */

export const defaultProps = {
  example: "Header",
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
