import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss';

const Button = ({children, type='submit', version='primary', isDisabled=false}) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
    </button>
  )
}


Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}
export default Button
