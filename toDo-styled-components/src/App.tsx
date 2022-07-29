import React, { useEffect, useState } from "react";

import * as C from "./App.styles";
import { AddInputArea } from "./components/AddInputArea/AddInputArea";
import { Task } from "./components/Task/Task";

export const App = () => {
	const [toDoList, setToDoList] = useState<Task[]>([]);
	
	useEffect(() =>{
		const jsonData = localStorage.getItem("tasks") ;

		if(jsonData){
			setToDoList(JSON.parse(jsonData));
		}else{
			localStorage.setItem("tasks", JSON.stringify(toDoList));
		}


	}, []);

	function saveInLocalStorage(arr : Task[]){
		localStorage.setItem("tasks", JSON.stringify(arr));
	}

	function toggleTaskAsDone(id: number){
		setToDoList(prevToDo => {
			const changedArray = prevToDo.map(item => item.id !== id ? item : {...item, isDone: !item.isDone })
			saveInLocalStorage(changedArray);
			return changedArray;
		});
	}

	function handleAddTask(taskName: string){
		let newList = [...toDoList];
		newList.push({
			id: toDoList.length +1,
			description:taskName,
			isDone: false
		})

		setToDoList(newList);
		saveInLocalStorage(newList)
	}

	return (
		<C.Container>
			<C.ContainerContent>
				<C.Title>Lista de tarefas</C.Title>

				<AddInputArea handleAddTask={handleAddTask}/>

				{toDoList.map((item, index) => (
					<Task key={index} item={item} handleDoneTask={toggleTaskAsDone}/>
				))}
			</C.ContainerContent>
		</C.Container>
	);
};

// 45 minutos
