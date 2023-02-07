import React from 'react'
import { InputWrapper, InputValue } from './styles'


const Input = ({child, inputStyle}) =>{
  return (
   <InputWrapper>
    <InputValue type={inputStyle} value={child} />
   </InputWrapper>
  )
}

export default Input