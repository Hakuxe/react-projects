import { Route, Routes } from "react-router-dom";

import { App } from "./src/App";
import { Info } from "./src/components/Info";
import { Form } from "./src/components/Form";
import { FormField } from "./src/components/FormField";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Info />} />
			<Route path="/form-simple" element={<Form />} />
			<Route path="/form-field" element={<FormField />} />
		</Routes>
	);
}
