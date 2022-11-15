import BusinesCard from "./components/BusinesCard/BusinesCard";

import "./styles/app.css";

function App() {
	return (
		<div className="grid">
			<div className="containerApp">
				<BusinesCard
					picture={"https://picsum.photos/550/300"}
					name={"Laura Smith"}
					job={"Frontend Developer"}
					extraInfo={"laurasmith.website"}
				/>
			</div>

			<div className="containerApp">
				<BusinesCard
					picture={"https://picsum.photos/550/300"}
					name={"Laura Smith"}
					job={"Frontend Developer"}
					extraInfo={"laurasmith.website"}
				/>
			</div>

			
		</div>
	);
}

export default App;

// TODO: criar componente variante de  business card 
