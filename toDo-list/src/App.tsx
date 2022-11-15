import { Plus, XCircle } from "phosphor-react";
import { useState } from "react";

import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm";
import { TaskList } from "./components/TaskLIst/TaskList";

import "./styles/app.css";

export function App() {
	const [showForm, setShowForm] = useState(false);

	const [tasksBd, setTaskBd] = useState([
		{ id: 1, taskDescription: "task1", isDone: false },
		{ id: 2, taskDescription: "task2", isDone: false },
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

	function handleAddTask(description: string) {
		setTaskBd((prevTaskBd) => {
			const newItem = {
				id: (prevTaskBd.at(-1).id + 1),
				taskDescription: description,
				isDone: false,
			};

			return [...tasksBd, newItem]
		});
	}

	function toggleShowForm() {
		setShowForm(!showForm);
	}

	return (
		<div>
			{showForm && <AddTaskForm toggleForm={toggleShowForm} addTask={handleAddTask} />}
			<div className="container">
				<div className="content">
					<header>
						<h2 className="title">Tarefas</h2>
						<button className="add-button" onClick={toggleShowForm}>
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
		</div>
	);
}
