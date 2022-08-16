import styled from "styled-components";

export const Container = styled.div`
	background-color: var(--white);
	width: 70%;
	height: 10rem;

	margin: 0 auto;
   margin-top: 2rem;
   border-radius: 1rem;
	padding: 1rem;

   form{
      display: flex;
      justify-content: space-evenly;
   }
`;


export const InputGroup = styled.fieldset`
   border: none;
   display: flex;
   flex-direction: column;
`;