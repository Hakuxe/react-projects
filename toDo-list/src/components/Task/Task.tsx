import React, { FC } from "react";

import { Trash } from "phosphor-react";

import "./taskStyles.css";

type Props = TaskItem & {
	handleDoneTask:ToggleIsDoneTask ;
	handleDeleteTask: DeleteTask;
} 

export const Task: FC<Props> = ({
	id,
	taskDescription,
	isDone,
	handleDoneTask,
	handleDeleteTask
}) => {

	const doneTaskStyle =  isDone ? "done-tark" :"";

	return (
		<div className="task-item">
			<label  className={`input-label ${doneTaskStyle}`}>
				<input
					type="checkbox"
					name="isDone"
					id="isDone"
					checked={isDone}
					onChange={() => handleDoneTask(id)}
				/>
				{taskDescription}
			</label>
			<Trash size={24} color="#ed333b" onClick={() => handleDeleteTask(id)}/>
		</div>
	);
};
