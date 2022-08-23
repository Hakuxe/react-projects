import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root{
      --white: #fff;
      --black:#000;

      --background-body: #f0f2f5;

      --green-300: #3dd705;
      --green-400: #46aa26;
      --green-500: #12a454;
      --green-900: #2d4a22;

      --ff-arial: Arial, sans-serif;
      --ff-roboto: 'Roboto', sans-serif;
      font-size: 62.5%; /*10px */
   }

`;

export const Box = styled.div`
	width: 70%;
	height: 10rem;
   margin: 0 auto;
   padding-block: 1rem;
   padding-inline: 3rem;
	background-color: var(--white);
   border-radius: 1rem;
`;
