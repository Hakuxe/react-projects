import "./card.css";

import pingIcon from "../../assets/location.svg";

interface CardProps {
	location: string;
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	imageUrl: string;
	// googleMapsUrl: string;
	googleMapsUrl?: string;
};

export default function Card({
	location,
	title,
	description,
	startDate,
	endDate,
	imageUrl,
	googleMapsUrl,
}: CardProps) {
	return (
		<div className="container">
			<img className="picture" src={imageUrl} alt="" />
			<section>
				<div>
					<img src={pingIcon} alt="" />
					<span className="location">{location}</span>
					<a className="link-map" href={googleMapsUrl ? googleMapsUrl : "#"}>
						View on Google Maps
					</a>
				</div>
				<h2 className="title">{title}</h2>
				<p className="travel-date">
					{startDate} - {endDate}
				</p>
				<p className="description">{description}</p>
			</section>
		</div>
	);
}
