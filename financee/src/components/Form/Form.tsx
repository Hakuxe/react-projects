import styles from "./form.module.css";

export const Form = () => {
	return (
		<form className={styles.formContainer}>
			<fieldset className={styles.inputGroup}>
				<label htmlFor="date">Data: </label>
				<input type="date" name="date" id="date" />
			</fieldset>

			<fieldset className={styles.inputGroup}>
				<label htmlFor="">Categoria: </label>
				<select className={styles.selectCategory} name="category" id="category" >
               <option value="">opção 1</option>
               <option value="">opção 2</option>
               <option value="">opção 3</option>
            </select>
			</fieldset>

			<fieldset className={styles.inputGroup}>
				<label htmlFor="">Título: </label>
				<input type="text" name="title" id="title" />
			</fieldset>

			<fieldset className={styles.inputGroup}>
				<label htmlFor="amount">Valor:</label>
				<input type="text" name="amount" id="amount" />
			</fieldset>

			<button>Adicionar</button>
		</form>
	);
};
