import React from 'react';
import './styles.css';

const Label = ({content, htmlFor}) => {
    return (
            <label className='label' htmlFor={htmlFor}>{content}</label>
    )
}

export default Label;