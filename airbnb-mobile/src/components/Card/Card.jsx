import "./card.css";

import star from "../../assets/star.svg";

export default function Card({
	status,
	image,
	rating,
	reviewCount,
	country,
	title,
	price,
}) {
	return (
		<div className="card">
			<figure className="card-image">
				<span className="status">{status}</span>
				<div className="card-photo">
					<img
						className="card-photo"
						src={image}
						alt=""
					/>
				</div>
				<figcaption className="stars">
					<span>
						<img src={star} alt="" />
						{rating}
					</span>
					<span className="gray">({reviewCount}) • </span>
					<span className="gray">{country}</span>
				</figcaption>
			</figure>
			<div className="card-footer">
				<p className="description">{title}</p>
				<p className="price">
					<span> From ${price} </span> / person
				</p>
			</div>
		</div>
	);
}
