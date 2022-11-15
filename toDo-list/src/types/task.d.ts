//  *.d.ts file is our compiler will recognize the types in there as global to the project and we won’t need to explicitly import or export them.

interface TaskItem {
	id: number;
	taskDescription: string;
	isDone: boolean;
}


type ToggleIsDoneTask = (id: number) => void;
type DeleteTask = (id: number) => void;
type AddTask = (description: string) => void;