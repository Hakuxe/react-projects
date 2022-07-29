import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root{
      --white: #fff;


      --ff-arial: Arial, sans-serif;
      font-size: 62.5%; /*10px */
   }

`;
