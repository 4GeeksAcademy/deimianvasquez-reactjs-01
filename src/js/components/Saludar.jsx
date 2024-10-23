import React from "react";
import PropTypes from "prop-types";


function Saludar(props) {
    console.log(props)

    return (
        <h1 className={props.className}> Hola {props.lastName}</h1>
    )
}

export default Saludar

Saludar.propTypes = {
    className: PropTypes.string,
    lastName: PropTypes.string
}