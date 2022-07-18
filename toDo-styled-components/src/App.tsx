import React, { useState } from "react";

import * as C from "./App.styles";
import { Task } from "./components/Task/Task";

export const App = () => {
	const [toDoList, setToDoList] = useState<Task[]>([
		{ id: 1, description: "Lavar o carro", isDone: false },
		{ id: 2, description: "Levar cachorro no veterinário ", isDone: true },
	]);

	function toggleTaskAsDone(id: number){
		setToDoList(prevToDo => {
			return prevToDo.map(item => item.id !== id ? item : {...item, isDone: !item.isDone })
		})

	}

	return (
		<C.Container>
			<C.ContainerContent>
				<C.Title>Lista de tarefas</C.Title>

				{toDoList.map((item, index) => (
					<Task key={index} item={item} handleDoneTask={toggleTaskAsDone}/>
				))}
			</C.ContainerContent>
		</C.Container>
	);
};

// 45 minutos
