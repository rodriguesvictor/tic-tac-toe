import React from 'react';
import './styles.css';

const Label = ({content}) => {
    return (
            <label className='label' htmlFor="input" >{content}</label>
    )
}

export default Label;