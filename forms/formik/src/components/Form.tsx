import { Formik } from "formik";

type FormErrorValues = {
	firstName: string;
	email: string;
	remenberMe: string;
	gender: string;
	color: string;
};

export function Form() {
	return (
		<Formik
			initialValues={{
				firstName: "",
				email: "",
				remenberMe: false,
				gender: "",
				color: "",
			}}
			validate={(values) => {
				const errors: FormErrorValues = {
					firstName: "",
					email: "",
					remenberMe: "",
					gender: "",
					color: "",
				};

				if (!values.email) {
					errors.email = "Obrigatório";
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = "Endereço de e-mail inválido";
				}

				return errors;
			}}
			onSubmit={(values, item) => {
				console.log(values, item);
			}}
		>
			{({ values, errors, handleChange, handleSubmit }) => (
				<form onSubmit={handleSubmit} className="flex flex-col">
					<input
						className="border border-blue-200 rounded  p-2 "
						type="text"
						placeholder="Digite seu nome"
						name="firstName"
						value={values.firstName}
						onChange={handleChange}
					/>

					<input
						className="border border-blue-200 rounded p-2 mt-4"
						type="email"
						placeholder="Digite seu email"
						name="email"
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <span>{errors.email}</span>}

					<label htmlFor="remenberMe">
						<input
							className="border border-blue-200 rounded p-2 mr-2 mt-4"
							id="remenberMe"
							type="checkbox"
							name="remenberMe"
							checked={values.remenberMe}
							onChange={handleChange}
						/>
						Lembrar de min ?
					</label>

					<fieldset className="flex justify-center gap-3">
						<label htmlFor="genderMale">
							<input
								className="mr-2"
								id="genderMale"
								type="radio"
								name="gender"
								value={"male"}
								onChange={handleChange}
							/>
							Masculino
						</label>
						<label htmlFor="genderFemale">
							<input
								className="mr-2"
								id="genderFemale"
								type="radio"
								name="gender"
								value={"female"}
								onChange={handleChange}
							/>
							Feminino
						</label>
					</fieldset>

					<select
						name="color"
						className="p-2 mt-4"
						value={values.color}
						onChange={handleChange}
					>
						<option value="" label="Select a color" />
						<option value="red" label="Vermelho" />
						<option value="blue" label="Azul" />
						<option value="green" label="Verde" />
					</select>

					<button
						type="submit"
						className="bg-emerald-500 px-6 py-2 mt-6 font-bold capitalize text-white"
					>
						enviar
					</button>
				</form>
			)}
		</Formik>
	);
}
