import IconButton from "../IconButton/IconButton";
import InfoSection from "../InfoSection/InfoSection";

import "./businessCardStyles.css";

import mailIcon from "../../assets/mail.svg";
import linkedinIcon from "../../assets/linkedin_icon.svg";

export default function BusinesCard({ picture, name, job, extraInfo }) {
	return (
		<div className={"cardContainer"}>
			<header>
				<img src={picture} alt={`Foto de perfil ${name}`} />
				<div className="info">
					<h2 className="name">{name}</h2>
					<p className="job">{job}</p>
					<small>{extraInfo}</small>

					<div className="social">
						<IconButton
							icon={mailIcon}
							iconAlt={"envelope"}
							label={"Email"}
						/>
						<IconButton
							icon={linkedinIcon}
							iconAlt={"Ícone linkedin"}
							label={"Linkedin"}
							backgroundColor={"#297FE5"}
							textColor={"#fff"}
							hasBorder={false}
						/>
					</div>
				</div>
			</header>

			<InfoSection
				title={"About"}
				text={
					"I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
				}
			/>

			<InfoSection
				title={"Interests"}
				text={
					"Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
				}
			/>
			<section className="linkTree">
				<img src="../../assets/gitHub_icon.svg" alt="Logo github" />
				<img src="../../assets/facebook_icon.svg" alt="Logo facebook" />
				<img src="../../assets/twitter_icon.svg" alt="Logo twitter" />
				<img src="../../assets/linkedin_icon.svg" alt="Logo linkedin" />
			</section>
		</div>
	);
}
