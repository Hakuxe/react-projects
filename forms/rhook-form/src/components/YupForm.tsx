import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

type YupInputTypes = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	age: number;
	createdOn: Date;

};

export function YupForm() {
	const formValidations = yup.object().shape({
		name: yup.string().required("Campo obrigatório"),
		email: yup.string().email("E-mail inválido"),
		age: yup
			.number()
			.typeError("Digite um valor numérico ")
			.integer("Insira um valor inteiro"),
		password: yup
			.string()
			.min(8, "A senha deve ter no mínimo 8 caracteres")
			.required("Campo obrigatório"),
		confirmPassword: yup
			.string()
			.required("Campo obrigatório")
			.oneOf([yup.ref("password"), null], "Senhas devem ser iguais"),

		createdOn: yup.date().default(function () {
			return new Date();
		}),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<YupInputTypes>({
		resolver: yupResolver(formValidations),
	});

	function onSubmit(data: YupInputTypes) {
		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col"}>
			<input
				type="text"
				placeholder="Digite seu nome"
				className="border border-gray-300 p-3"
				{...register("name")}
			/>
			{errors.name?.message && (
				<p className="erro-message">{errors.name?.message}</p>
			)}
			<input
				type="text"
				placeholder="Digite seu e-mail"
				className="border border-gray-300 p-3"
				{...register("email")}
			/>
			{errors.email?.message && (
				<p className="erro-message">{errors.email?.message}</p>
			)}

			<input
				type="password"
				placeholder="Digite sua senha"
				className="border border-gray-300 p-3"
				{...register("password")}
			/>
			{errors.password?.message && (
				<p className="erro-message">{errors.password?.message}</p>
			)}

			<input
				type="password"
				placeholder="Confirme a senha "
				className="border border-gray-300 p-3"
				{...register("confirmPassword")}
			/>
			{errors.confirmPassword?.message && (
				<p className="erro-message">{errors.confirmPassword?.message}</p>
			)}

			<input
				type="number"
				placeholder="Digite sua idade"
				className="border border-gray-300 p-3"
				{...register("age")}
			/>
			{errors.age?.message && (
				<p className="erro-message">{errors.age?.message}</p>
			)}
			<input
				type="date"
				placeholder="Digite sua data de nascimento"
				className="border border-gray-300 p-3"
				{...register("createdOn")}
			/>
			<button
				type="submit"
				className="w-full rounded bg-purple-600 hover:bg-purple-700 transition-colors py-4 mt-8 text-white font-bold"
			>
				Enviar
			</button>
		</form>
	);
}