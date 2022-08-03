import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   :root{
      --white: #fff;

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
