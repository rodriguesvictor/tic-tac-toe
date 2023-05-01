import React from 'react'
import Label from '../Label';
import Input from '../Input';

const Checkbox = ({value = "", id = "", content = ""}) => {
  return (
    <>
    <Input value={value} id={id} type='checkbox' content={content}/>
    <Label htmlFor={id} content={content}/>
    </>
  )
}

export default Checkbox;