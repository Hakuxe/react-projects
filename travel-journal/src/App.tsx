import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

import "./styles/app.css";

import { data } from "../fakeDb.js";

function App() {
	console.log(data);
	return (
		<div className="app">
			<Navbar />
			<section className="card-list">
				{data.map((item) => {
					return <Card key={item.id} {...item} />;
				})}
			</section>
		</div>
	);
}

export default App;
