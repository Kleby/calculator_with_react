import React from 'react'
import { InputWrapper, InputValue } from './styles'


const Input = ({child, inputStyle}) =>{
  return (
   <InputWrapper type={inputStyle} >
    <InputValue value={child} />
   </InputWrapper>
  )
}

export default Input