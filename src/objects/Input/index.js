import React from 'react'
import Label from '../Label';

const Input = ({value, id, content}) => {
    return (
        <>
        <input type='checkbox' id={id} value={value} />
        <Label htmlFor={id}content={content}/>
        </>
    )
}

export default Input;