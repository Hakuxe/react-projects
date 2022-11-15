import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type LoginInputs = {
	username: string;
	password: string;
	age: number;
};

export function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInputs>();

	const onSubmit: SubmitHandler<LoginInputs> = (data) =>
		console.log(data, errors);

	return (
		<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="user"> Usuário: </label>
			<input
				id="user"
				type="text"
				className="border border-gray-300 p-3"
				placeholder="Digite seu usuário"
				{...register("username", { required: true })}
			/>
			{errors.username && "Campo obrigatório"}
			{errors.username && (
				<span className="text-sm text-red-500 ">Campo obrigatório</span>
			)}
			<p>{errors.username?.message} </p>

			<label htmlFor="password" className="mt-5">
				Senha:
			</label>
			<input
				id="password"
				type="text"
				className="border border-gray-300 p-3"
				placeholder="Digite sua senha"
				{...register("password", { required: "Este campo é obrigatório" })}
			/>
			<ErrorMessage
				errors={errors}
				name="password"
				message={errors.username?.message} // não da pra estilizar
			/>
			<ErrorMessage
				errors={errors}
				name="password"
				render={({ message }) => (
					// message vindo do object required
					<p className="text-sm text-red-500">Campo obrigatório</p>
				)}
			/>
			<label htmlFor="user" className="mt-5">
				Idade:
			</label>
			<button
				type="submit"
				className="w-full rounded bg-purple-600 hover:bg-purple-700 transition-colors py-4 mt-8 text-white font-bold"
			>
				Entrar
			</button>
		</form>
	);
}
