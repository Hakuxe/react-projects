import styled from "styled-components";

export const Container = styled.div`
	background-color: var(--white);
	width: 70%;
	height: 10rem;

	margin: 0 auto;
   margin-top: 2rem;
   border-radius: 1rem;
	padding-block: 1rem;
   padding-inline: 3rem;

   display: grid;
   grid-template-columns: 1fr;
   align-items: center;


   form{
      display: flex;
      justify-content: space-between;

      gap:0.8rem;
   }
`;


export const InputGroup = styled.fieldset`
   border: none;
   display: flex;
   flex-direction: column;
   width: 100%;

   label{
      font-size: 1.4rem;
		font-weight: bold;
		text-align: left;
   }
`;

export const AddButton = styled.button`
   padding-inline: 4rem;
   padding-block: 0.5rem ;
   height: fit-content;
   align-self: flex-end;
`;