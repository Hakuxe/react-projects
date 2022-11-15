import React from "react";
import { Container } from "./styles";

type Props = {
	item: Task;
	handleDoneTask: (id: number) => void;
};

export const Task = ({ item, handleDoneTask }: Props) => {
	return (
		<Container isChecked={item.isDone}>
			<input
				type="checkbox"
				name=""
				id=""
				checked={item.isDone}
				onChange={() => handleDoneTask(item.id)}
			/>
			<label htmlFor="">{item.description}</label>
		</Container>
	);
};
