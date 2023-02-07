import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
   border-bottom: 0.125em solid #878a8f;
   width: 100%;
   display: flex;
   ${props => InputStyles[props.type]}
   padding: .4rem .6rem;
   display: flex;
   align-items: center;
`;

const InputStyles = {
   inputPreview : css`
      background-color: #37374f ;
      color: #cdcdcd;
      font-size: 1rem;
      padding: .2rem .7rem;
   ` 
}

export const InputValue = styled.input`
   color: #ff5;
   font-size: 1.5rem ; 

   text-align:right;
   width: 100%;
   border: 0;
   outline: none;
   background-color: transparent;

`;

