import React from 'react';
import './styles.css';

const Label = () => {
    return (
        <div className='label'>
            <input type="checkbox" id="label" name="label" />
            <label htmlFor="label" >Scales</label>
        </ div>
    )
}

export default Label;