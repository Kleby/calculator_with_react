import React from 'react'

import {ButtonWrapper} from './styles';

const Button = ({value, bgColor, handleOnClick}) => {
  
  return (
    <ButtonWrapper 
      bgColor = {bgColor} 
      value={value}
      onClick={handleOnClick}
      >{value}
    </ButtonWrapper>
  )
}

export default Button;