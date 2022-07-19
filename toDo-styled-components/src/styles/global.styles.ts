import { createGlobalStyle } from "styled-components";


export const  GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root{
      --white: #fff;
      --gray-800: #ccc;

      --dark-500: #17181f;
      --dark-600: #20212c;

      --clr-border: #444;



      --ff-arial: Arial, sans-serif; 
      font-size: 62.5%; /*10px */
   }
`;
