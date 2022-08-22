import { StyledButton } from "../../styles/Buttons";
import { AddButton, Container, InputGroup} from "./formStyles";

export default function Form() {
	return (
		<Container>
			<form >
				<InputGroup>
					<label htmlFor="date">Data:</label>
					<input id="date" type="date" />
				</InputGroup>

				<InputGroup>
					<label htmlFor="category">Categoria:</label>
					<select name="category" id="category">
						<option value="">option 1</option>
						<option value="">option 2</option>
						<option value="">option 3</option>
					</select>
				</InputGroup>

				<InputGroup>
					<label htmlFor="title">Título:</label>
					<input id="title" type="text" />
				</InputGroup>

				<InputGroup>
					<label htmlFor="transactionValue">Valor:</label>
					<input id="transactionValue" type="number" />
				</InputGroup>

				{/* <AddButton>Adicionar</AddButton> */}

				<StyledButton >Adicionar</StyledButton>

			</form>
		</Container>
	);
}
