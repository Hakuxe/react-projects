import styled from "styled-components";
import { Box } from "../../styles/global.styles";

export const CardContainer = styled(Box)`
	margin-top: -5rem;
	border-radius: 1rem;

	display: flex;

	.month-select {
      display: flex;
		justify-content: space-between;
		align-items: center;
		flex-grow: 1;

      font-size: 1.6rem;
	}
   
	.info {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-grow: 2;
	}
`;

export const InfoSection = styled.div`
	text-align: center;

	p {
		font-size: 1.4rem;
		text-align: center;

		margin-bottom: 0.8rem;
	}

	span {
		font-size: 1.6rem;
		font-weight: bold;
		text-align: center;
	}
`;


export const Button = styled.button`
   background-color: blue;
   border:none;
   border: 1px solid var(--black);

   width: 3rem;
   height: 3rem;

`;