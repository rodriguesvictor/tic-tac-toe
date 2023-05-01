import React from 'react'
import Label from '../Label';

const Input = ({value = "", id = "", content = "", type = "text"}) => {
    return (
        <>
        <input type={type} id={id} value={value} />
        <Label htmlFor={id}content={content}/>
        </>
    )
}

export default Input;