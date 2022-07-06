import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { setLocale } from 'yup';

type YupInputTypes = {
	name: string;
	email: string;
	age: number;
	createdOn: Date;
};


export function YupForm() {
	const formValidations = yup.object().shape({
		name: yup.string().required(),
		email: yup.string().email(),
		age: yup.number().integer("Insira um valor inteiro"),
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
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="Digite seu nome"
				className="border border-gray-300 p-3"
				{...register("name")}
			/>
			<input
				type="text"
				placeholder="Digite seu e-mail"
				className="border border-gray-300 p-3"
				{...register("email")}
			/>
			<input
				type="number"
				placeholder="Digite sua idade"
				className="border border-gray-300 p-3"

				{...register("age")}
			/>
			{/* {console.log(errors)} */}
			{errors.age?.message && <p>{errors.age?.message}</p>}
			<input
				type="date"
				placeholder="Digite sua data de nascimento"
				className="border border-gray-300 p-3"
				{...register("createdOn")}
			/>

			<button type="submit">Enviar</button>
		</form>
	);
}
