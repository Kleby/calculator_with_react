import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button `
   height: 2rem;
   width: 2rem;

   display: flex;
   align-items: center;
   justify-content: center;
   
   font-size: 1.3rem;

   padding: 2rem ;
   border: 0.025rem groove #cdcdcd;
   border-radius: 50%;
   outline: none;
   color: #fff;

   &:hover{
      cursor: pointer;
      transition: 200ms;
      border-color: #779;
   }

   ${({bgColor}) => buttonStyles[bgColor]}
`;

const buttonStyles = {
   buttonPrimary: css`
      background-color: #333;

      &:hover{
         background-color: #222;
      }
   `,
   buttonSecundary: css`
      background-color: #707070;

      &:hover{
         background-color: #999;
         color: #222;
      }
   `,
   buttonClear: css`
      background-color: #ff9934;

      &:hover{
         background-color: #dd7712;
      }
   `,

   buttonZero : css`
      background-color: transparent;
   `
}