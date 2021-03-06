import React from "react";
import { useForm, SubmitHandler, } from "react-hook-form";

enum GenderEnum {
	female = "female",
	male = "male",
}

enum favoriteColorEnum {
	red = "vermelho",
	blue = "azul",
	green = "verde",
}

type FormInputs = {
	fullName: string;
	email: string;
	gender: GenderEnum;
	reciveUpdates: boolean;
	message: string;
	currentDate: Date;
	favoriteColor: favoriteColorEnum;
};

export function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>();

	const onSubmit: SubmitHandler<FormInputs> = (data) => {
		console.log(data);
	};

	return (
		<form
			className="flex flex-col justify-center items-center gap-4 p-8 bg-slate-50 w-[500px] rounded-2xl"
			onSubmit={handleSubmit(onSubmit)}
		>
			{errors.fullName && (
				<span className="text-red-500 self-start">Campos obrigatórios</span>
			)}
			<input
				type="text"
				className={`${
					errors.fullName ? "border-red-500 border-3 " : "border-gray-400"
				} border border-gray-400 p-2 rounded w-full`}
				placeholder="Digite seu nome"
				{...register("fullName", { required: true })}
			/>
			<input
				type="email"
				className="border border-gray-400 p-2 rounded w-full"
				placeholder="E-mail de contato"
				{...register("email")}
			/>

			<fieldset className="flex gap-2 self-start">
				<label htmlFor="male">
					<input
						id="male"
						className="mr-1"
						value={"male"}
						type="radio"
						{...register("gender")}
					/>
					Masculino
				</label>
				<label htmlFor="female">
					<input
						id="female"
						className="mr-1"
						value={"female"}
						type="radio"
						{...register("gender")}
					/>
					Feminino
				</label>
			</fieldset>

			<select
				className="p-2 rounded w-full"
				{...register("favoriteColor")}
				id="favoriteColor"
			>
				<option value="red">vermelho</option>
				<option value="blue">azul</option>
				<option value="green">verde</option>
			</select>

			<label htmlFor="reciveUpdates">
				<input
					id="reciveUpdates"
					className="mr-1 "
					type="checkbox"
					{...register("reciveUpdates")}
				/>
				receber notificações
			</label>

			<textarea
				className="border border-gray-400 w-full p-2"
				id="message"
				placeholder="Escreva sua mensagem"
				{...register("message")}
			></textarea>

			<input
				type="date"
				className="w-full border border-gray-400 py-2 px-1 rounded"
				{...register("currentDate")}
			/>

			<button
				type="submit"
				className="rounded bg-purple-500 hover:bg-purple-700 transition-colors px-4 py-3 text-white font-bold w-full"
			>
				Enviar
			</button>
		</form>
	);
}
