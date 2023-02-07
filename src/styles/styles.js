import styled from "styled-components";
import { Devices } from "../components/breakpoints";

export const Container = styled.main`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
   padding:2rem;

   @media (${Devices.tablet}){
      padding: 0;
   }
`;