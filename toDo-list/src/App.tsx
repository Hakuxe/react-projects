import { Plus } from "phosphor-react";
import { useState } from "react";
import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";

import { TaskList } from "./components/TaskLIst/TaskList";

import "./styles/app.css";

export function App() {
	const [isTaskDone, setIsTaskDone] = useState(false);

	const [tasksBd, setTaskBd] = useState([
		{ id: 1, taskDescription: "task1", isDone: false },
		{ id: 2, taskDescription: "task2", isDone: false },
		{ id: 3, taskDescription: "task3", isDone: true },
		{ id: 4, taskDescription: "task4", isDone: true },
		{ id: 5, taskDescription: "task5", isDone: true },
		{ id: 6, taskDescription: "task6", isDone: true },
		{ id: 7, taskDescription: "task7", isDone: true },
	]);

	function handleChange(idTask: number) {
		setTaskBd((prevTaskBd) => {
			return prevTaskBd.map((item) => {
				if (item.id !== idTask) {
					return item;
				} else {
					return { ...item, isDone: !item.isDone };
				}
			});
		});
	}

	function handleDeleteTask(idTask: number) {
		setTaskBd((prevTaskBd) =>
			prevTaskBd.filter((item) => item.id !== idTask)
		);
	}

	return (
		<div className="container">
			<div className="content">
				<header>
					<h2 className="title">Tarefas</h2>
					<button className="add-button">
						<Plus size={24} weight="bold" />
					</button>
				</header>
				<section>
					{tasksBd.length > 0 ? (
						<TaskList
							tasksBd={tasksBd}
							handleChange={handleChange}
							handleDeleteTask={handleDeleteTask}
						/>
					) : (
						<p>nd a fazer</p>
					)}
				</section>
			</div>
		</div>
	);
}
