import { BrowserRouter } from "react-router-dom";
import { Router } from "../Router";


export function App() {
	return (
		<div className=" w-[50vw] p-4">
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	);
}

