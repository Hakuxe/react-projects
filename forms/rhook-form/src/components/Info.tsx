import React from "react";
import { Link } from "react-router-dom";
import { Form } from "./Form";

export function Info() {
	return (
		<div>
			<h2 className="text-2xl font-bold">Routes</h2>
			<div className="flex flex-col mt-4">
				<Link to={"/basic"} className="text-blue-500">Basics </Link>
				<Link to={"/sign-in"} className="text-blue-500"> Erro handling </Link>
			</div>
		</div>
	);
}
