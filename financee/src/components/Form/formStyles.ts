import styled from "styled-components";

import { StyledButton } from "../../styles/Buttons";
import { Box } from "../../styles/globalStyles";

export const Container = styled(Box)`
	margin-top: 2rem;
	
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;

	form {
		display: flex;
		justify-content: space-between;

		gap: 0.8rem;
	}
`;

export const InputGroup = styled.fieldset`
	border: none;
	display: flex;
	flex-direction: column;
	width: 100%;

	label {
		font-size: 1.4rem;
		font-weight: bold;
		text-align: left;
	}
`;

export const AddButton = styled(StyledButton)`
	align-self: flex-end;
`;
