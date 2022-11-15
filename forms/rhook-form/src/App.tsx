import { BrowserRouter } from "react-router-dom";
import { Router } from "../Router";
export default function App() {
	return (
		<div className="w-screen h-screen grid grid-cols-1 grid-rows-1 justify-items-center items-center">
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	);
}
