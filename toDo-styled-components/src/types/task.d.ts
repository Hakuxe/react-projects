type Task = {
	id: number;
	description: string;
	isDone: boolean;
};

type AddTask = (taskName: string) => void;
