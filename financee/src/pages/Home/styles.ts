import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
   background-color: var(--background-body);
   font-family: var(--ff-roboto);
`;

export const Header = styled.div`
	height: 15rem;

   display: flex;
   justify-content: center;
	background-color: var(--green-500);
`;

export const Title = styled.h1`
   margin-top: 2rem;
   font-size: 3.2rem;
   letter-spacing: 0.3rem;
   color: var(--white);
`;
