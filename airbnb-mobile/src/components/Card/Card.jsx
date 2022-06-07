import "./card.css";

import star from "../../assets/star.svg";

export default function Card() {
	return (
		<div className="card">
			<figure className="card-image">
				<span className="status">SOLD OUT</span>
				<div className="card-photo"></div>
				<figcaption className="stars">
					<span>
						<img src={star} alt="" />
						5.0
					</span>
					(6) - USA
				</figcaption>
			</figure>
			<div className="card-footer">
				<p className="description">Life lessons with Katie Zaferes</p>
				<p className="price">
					<span> From $136 </span> / person
				</p>
			</div>
		</div>
	);
}
