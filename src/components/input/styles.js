import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
   border-bottom: 0.125em solid #878a8f;
   width: 100%;
   display: flex;
`;

const InputStyles = {
   inputCurrent : css`
    background-color: #aaa5;
    color: #ff5;
    font-size: 1.5rem ;
    padding: .4rem .6rem;
    `,

   inputPreview : css`
      background-color: #9995 ;
      color: #cdcdcd;
      font-size: 1rem;
      padding: .2rem .7rem;
   ` 
}

export const InputValue = styled.input`

   text-align:right;
   width: 100%;
   border: 0;
   outline: none;
   ${props => InputStyles[props.type]}

`;

