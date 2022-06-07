import Navbar from "./components/Navbar/Navbar";

import "./styles/app.css";

import heroPhoto from "./assets/grid-photos.png";
import Card from "./components/Card/Card";

function App() {
	return (
		<div className="app">
			<Navbar />
			<section className="hero">
				<img className="hero-photo" src={heroPhoto} alt="" />

				<h2 className="title">Online Experiences</h2>
				<p className="invite">
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</section>

			<div className="cards">
				<Card />
			</div>
		</div>
	);
}

export default App;
