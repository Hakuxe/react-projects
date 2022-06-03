import IconButton from "../IconButton/IconButton";

import "./businessCardStyles.css";

import mailIcon from "../../assets/mail.svg";
import linkedinIcon from "../../assets/linkedin_icon.svg";

export default function BusinesCard() {
	return (
		<div className={"cardContainer"}>
			<header>
				<img src="https://picsum.photos/550/300" alt="foto de perfil" />
				<div className="info">
					<h2 className="name">Laura Smith</h2>
					<p className="job">Frontend Developer</p>
					<small>laurasmith.website</small>

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

			<section className="about">
				<h3>About</h3>
				<p>
					I am a frontend developer with a particular interest in making
					things simple and automating daily tasks. I try to keep up with
					security and best practices, and am always looking for new things
					to learn.
				</p>
			</section>

			<section className="insterests">
				<h3>Interests</h3>
				<p>
					Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
					Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
				</p>
			</section>

			<section className="linkTree"></section>
		</div>
	);
}
