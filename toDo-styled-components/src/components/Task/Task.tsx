import React from "react";
import { Container } from "./styles";

type Props = {
	item: Task;
};

export const Task = ({ item }: Props) => {
	return (
		<Container isChecked={item.isDone}>
			<input type="checkbox" name="" id="" checked={item.isDone} />
			<label htmlFor="">{item.description}</label>
		</Container>
	);
};
