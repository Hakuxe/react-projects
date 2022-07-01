import { SubmitHandler, useForm } from "react-hook-form";

type LoginInputs = {
	username: string;
	password: string;
};

export function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInputs>();

	const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" className="border border-gray-500" placeholder="Usuário" {...register("username")}/>
			<input type="text" className="border border-gray-500" placeholder="Senha" {...register("password")}/>
		</form>
	);
}
