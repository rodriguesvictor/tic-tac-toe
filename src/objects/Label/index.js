import React from 'react';
import './styles.css';

const Label = ({content}) => {
    return (
            <label htmlFor="label" >{content}</label>
    )
}

export default Label;