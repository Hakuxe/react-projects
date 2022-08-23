import React from "react";
import ReactDOM from "react-dom/client";

import {Home} from "./pages/Home/Home";

import { GlobalStyles } from "./styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyles />
		<Home />
	</React.StrictMode>
);
