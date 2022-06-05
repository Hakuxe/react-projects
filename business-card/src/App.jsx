import BusinesCard from "./components/BusinesCard/BusinesCard";

import "./styles/app.css";

function App() {
	return (
		<div className="App">
			<BusinesCard 
				picture={'https://picsum.photos/550/300'}
				name={"Laura Smith"}
				job={"Frontend Developer"}
				extraInfo={"laurasmith.website"}
			/>
		</div>
	);
}

export default App;
