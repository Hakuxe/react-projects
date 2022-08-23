import styled from "styled-components";

import { Box } from "../../styles/globalStyles";

export const Container = styled(Box)`
	margin-top: 2rem;
   padding-top: 2rem;
   height: fit-content;
`;

export const Table = styled.table`
	width: 100%;
	text-align: left;
   font-size: 1.6rem;

	tbody tr :nth-child(3) {
		width: 50%;
	}

   td{
      padding-block: 1.2rem;
   }
`;
