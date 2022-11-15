import React, { useState } from "react";

import "./signUpForm.css";

export default function SignUpForm() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		checkPassword: "",
		joinedNewsletter: true,
	});

	const handleChange = (event) => {
		const { name, type, checked, value } = event.target;
		const valueInput = type === "checkbox" ? checked : value;
		setFormData((prevState) => {
			return {
				...prevState,
				[name]: valueInput,
			};
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (formData.joinedNewsletter) {
			console.log("Thanks for signin up for our newsletter");
		}

		if (formData.password !== formData.checkPassword) {
			console.log("passwords do not match");
		} else {
			console.log("Successfully signed up");
		}
	};

	return (
		<form className="sign-up-form" onSubmit={handleSubmit}>
			<input
				type="email"
				className="form-inputs"
				name="email"
				value={formData.email}
				placeholder="E-mail"
				onChange={handleChange}
				required
			/>
			<input
				type="password"
				className="form-inputs"
				name="password"
				value={formData.password}
				placeholder="Digite sua senha"
				onChange={handleChange}
				required
			/>
			<input
				type="password"
				className="form-inputs"
				name="checkPassword"
				value={formData.checkPassword}
				placeholder="Confirme a senha"
				onChange={handleChange}
				required
			/>

			<fieldset className="container-checkbox">
				<input
					id="joinedNewsletter"
					type="checkbox"
					name="joinedNewsletter"
					checked={formData.joinedNewsletter}
					onChange={handleChange}
				/>
				<label htmlFor="joinedNewsletter">Assinar nossa newsletter ?</label>
			</fieldset>

			<button className="form-button" type="submit">
				Sign Up
			</button>
		</form>
	);
}
