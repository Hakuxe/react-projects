import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import App from "./src/App";
import { Form } from "./src/components/Form";
import { Info } from "./src/components/Info";
import { SignIn } from "./src/components/SignIn";

export function Router() {
	return (
		<Routes>
      <Route path="/" element={<Info />}/>
			<Route path="/basic" element={<Form />} />
			<Route path="/sign-in" element={<SignIn />} />
		</Routes>
	);
}
