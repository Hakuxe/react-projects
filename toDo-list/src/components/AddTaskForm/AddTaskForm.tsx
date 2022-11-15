import React, { FC, useState } from "react";
import { XCircle } from "phosphor-react";

import "./addTaskForm.css";

interface Props {
	toggleForm: () => void;
	addTask: AddTask;
}

export const AddTaskForm: FC<Props> = ({ toggleForm, addTask }) => {
	const [formData, setFormData] = useState({ taskDescription: "" });

	function handleChange(event: any) {
		const { name, value } = event.target;

		setFormData((prevUser) => {
			//computed properties
			return { ...prevUser, [name]: value };
		});
	}

	return (
		<div className="overlay">
			<form
				onSubmit={(event) => {
					event.preventDefault();
					addTask(formData.taskDescription);
					toggleForm();
				}}
			>
				<div className="form-header">
					<h2>Nova tarefa</h2>
					<a className="close-btn" onClick={toggleForm}>
						<XCircle size={36} color={"#000"} />
					</a>
				</div>
				<label htmlFor="taskDescription">O que gostaria de fazer ?</label>
				<input
					id="taskDescription"
					name="taskDescription"
					type="text"
					value={formData.taskDescription}
					placeholder="Descrição da tarefa"
					onChange={handleChange}
				/>
				<button type="submit" className="btn-create-task">
					Criar
				</button>
			</form>
		</div>
	);
};
