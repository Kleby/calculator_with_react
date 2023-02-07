import styled, { css } from 'styled-components';

import { Devices } from './breakpoints';



export const ContentWrapper = styled.div `
   display: flex;
   flex-direction: column;
   align-items: center;
   max-width: 28em;

   width: 100%;
   padding: 3rem  2.5rem 1.25rem;

   border-radius: 4em;
   
   background-color: #37374f;
   border: .5rem outset #878a8f;
   box-shadow: inset 0px 0px 4px #474a4f ;
   
   user-select: none;
   
   @media (${Devices.tablet}){
      padding: 0;
}
`;

export const ContentInput = styled.div `
   width: 80%;
   border: 0.5rem ridge #878a8f;
   margin-bottom: 2rem;

   @media(${Devices.tablet}){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1.5rem 0;

   }
`;

export const ContentNumbers = styled.div `
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr ;
   gap: 1rem;
   justify-items: center;

   @media(${Devices.mm}){
      gap: .5rem;
   }
`;

export const ZeroWrapper = styled.button `
   width: 100%;
   grid-column: span 2;
   background-color: #333;
   color: #fff;
   border-radius: 2rem;
   border: 0;
   font-size: 1.3rem;
   border: 0.025rem groove #cdcdcd;
    &:hover{
      cursor: pointer;
      border-color: #779;
      background-color: #222;
      transition: 200ms;
   }
`;

export const ShowDisplay = styled.div `
   display: flex;
   justify-content: flex-end;
   width: 100%;
   background-color: #9995;
   color: #cdcdcd;
   font-size: 1rem;
   padding: .2rem .7rem;

`;

const buttonStyles = {
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
export const ButtonWrapper = styled.button `
   height: 2rem;
   width: 2rem;

   display: flex;
   align-items: center;
   justify-content: center;
   
   font-size: 1.3rem;

   padding: 2rem ;
   border: 0;
   border-radius: 50%;

   color: #fff;

   &:hover{
      cursor: pointer;
      transition: 200ms;
   }
   
   ${props => buttonStyles[props.type]}
   `;


export const MarkWrapper = styled.div`
   margin: 1.25rem 0;
   padding-top: .5rem;
   padding-right: 1rem;
   display: flex;
   justify-content: flex-end;
   width: 100%;
`;

export const Mark = styled.a`
   margin-right: 3rem;
   text-transform: capitalize;
   color: #ff5;
   text-decoration: none;
`;

//** Media querys **
//mm = mobile M
//ml = mobile L

