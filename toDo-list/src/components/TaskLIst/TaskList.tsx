import React, { ReactNode } from "react";
import { Task } from "../../components/Task/Task";

interface Props {
	tasksBd: TaskItem[];
	handleChange: any; //TODO; mudar esse type dps
	handleDeleteTask: any; //TODO; mudar esse type dps
}

export const TaskList = ({
	tasksBd,
	handleChange,
	handleDeleteTask,
}: Props) => {
	return (
		<div>
			{tasksBd.map((item, index) => {
				return (
					<Task
						key={item.id}
						id={item.id}
						taskDescription={item.taskDescription}
						isDone={item.isDone}
						handleDoneTask={handleChange}
						handleDeleteTask={handleDeleteTask}
					/>
				);
			})}
		</div>
	);
};
