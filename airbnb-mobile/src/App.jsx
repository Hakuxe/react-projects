import Navbar from "./components/Navbar/Navbar";

import "./styles/app.css";

import heroPhoto from "./assets/grid-photos.png";
import Card from "./components/Card/Card";
import data from "../data.js";

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

			<div className="card-list">
				{data.map((item) => {
					return (
						<Card
							key={item.id}
							title={item.title}
							price={item.price}
							// image={"https://picsum.photos/170/300"}
							image={item.coverImg}
							rating={item.stats.rating}
							reviewCount={item.stats.reviewCount}
							country={item.location}
							openSpots={item.openSpots}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
