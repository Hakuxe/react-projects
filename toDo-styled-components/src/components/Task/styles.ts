import styled from "styled-components";

type ContainerProps = {
   isChecked: boolean
}

//transforma numa função para receber propriedades
export const Container = styled.div(( { isChecked }:ContainerProps ) => `
   display: flex;
   align-items: center;
   gap: 0.8rem;

   margin-block: 1.2rem;
   padding: 1.2rem;
   border-radius: 0.8rem;

   background-color: var(--dark-600);

   input{
      width: 2.4rem;
      height: 2.4rem;
   }

   label{
      font-size: 1.6rem;
      font-family: var(--ff-arial);
      color: var(--gray-800);
      text-decoration: ${isChecked ? "line-through" : "initial"}

   }
`);