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
				<Card
					status={"SOLD OUT"}
					image={"https://picsum.photos/170/300"}
					rating={"5.0"}
					reviewCount={6}
					country={"USA"}
					title={"Life Lessons with Katie Zaferes"}
					price={136}
				/>
			</div>
		</div>
	);
}

export default App;

//  img ("katie-zaferes.png")
//  rating ("5.0")
//  reviewCount (6)
//  country (Whatever you want)
//  title ("Life Lessons with Katie Zaferes")
//  price (136)
