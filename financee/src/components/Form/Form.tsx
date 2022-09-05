import { useState, ChangeEvent } from "react";
import styles from "./form.module.css";

enum Catetories {
	salary = "Salário",
	food = "Alimentação",
	fun = "Diversão",
}

interface Props {
	handleSubmit: AddTransation;
}

export const Form = ({ handleSubmit }: Props) => {
	const [formData, setFormData] = useState<ITransaction>({
		date: "",
		category: "",
		title: "",
		amount: "",
	});

	function handleChange(
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) {
		const { value, name } = event.target;

		setFormData((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	}

	return (
		<form className={styles.formContainer}>
			<fieldset className={styles.inputGroup}>
				<label htmlFor="date">Data: </label>
				<input
					type="date"
					name="date"
					id="date"
					value={formData.date}
					onChange={handleChange}
				/>
			</fieldset>

			<fieldset className={styles.inputGroup}>
				<label htmlFor="">Categoria: </label>
				<select
					className={styles.selectCategory}
					name="category"
					id="category"
					onChange={handleChange}
				>
					<option value={Catetories.salary}>{Catetories.salary}</option>
					<option value={Catetories.fun}>{Catetories.fun}</option>
					<option value={Catetories.food}>{Catetories.food}</option>
				</select>
			</fieldset>

			<fieldset className={styles.inputGroup}>
				<label htmlFor="">Título: </label>
				<input
					type="text"
					name="title"
					id="title"
					value={formData.title}
					onChange={handleChange}
				/>
			</fieldset>

			<fieldset className={styles.inputGroup}>
				<label htmlFor="amount">Valor:</label>
				<input
					type="text"
					name="amount"
					id="amount"
					value={formData.amount}
					onChange={handleChange}
				/>
			</fieldset>

			<button
				onClick={(event) => {
					event.preventDefault();
					handleSubmit(formData);
				}}
			>
				Adicionar
			</button>
		</form>
	);
};
