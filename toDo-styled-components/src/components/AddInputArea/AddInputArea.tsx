import React, { KeyboardEvent, MouseEvent, useState } from "react";

import { Container } from "./styles";

type Props = {
	handleAddTask: AddTask;
};
export const AddInputArea = ({ handleAddTask }: Props) => {
	const [inputText, setInputText] = useState("");

	const handleKeyUp = (event: KeyboardEvent ) => {
		if (event.code === "Enter" && inputText !== "") {
			handleAddTask(inputText);
			setInputText('');
		}
	};

	const handleClick = (event: MouseEvent) => {
		if (inputText !== "") {
			handleAddTask(inputText);
			setInputText('');
		}
	}
	return (
		<Container>
			<div className="button" onClick={handleClick}>+</div>  
			<input
				type="text"
				placeholder="O que deseja fazer? "
				value={inputText}
				onChange={(event) => setInputText(event.target.value)}
				onKeyUp={handleKeyUp}
			/>
		</Container>
	);
};