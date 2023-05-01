import React from 'react'

const Input = ({value = "", id = "", type = "text"}) => {
    return (
        <input type={type} id={id} value={value} />
    )
}

export default Input;