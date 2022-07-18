import styled from "styled-components";

export const Container = styled.div`
   border: 1px solid var(--gray-500);
   border-radius: 0.8rem;
   padding: 1.2rem;
   margin-block: 1.2rem;

   display: flex;
   align-items: center;

   .button{
      font-size: 3.6rem;   
      color: var(--white);
      margin-right: 0.4rem;
   }

   input{
      border: none;
      /* outline: none; */
      padding: 1.2rem;
      font-size: 1.8rem;
      
      flex: 1;
      color: var(--white);
      background-color: transparent;
      
   }
`;