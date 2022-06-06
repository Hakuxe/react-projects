import {useState} from 'react'
import IconButton from "../IconButton/IconButton";
import InfoSection from "../InfoSection/InfoSection";

import "./businessCardStyles.css";

import mailIcon from "../../assets/mail.svg";
import twitterIcon from "../../assets/twitter_icon.svg";
import facebookIcon from "../../assets/facebook_icon.svg";
import githubIcon from "../../assets/gitHub_icon.svg";
import instagramIcon from "../../assets/instagram_icon.svg";
import linkedinIcon from "../../assets/linkedin_icon.svg";

export default function BusinesCard({ picture, name, job, extraInfo }) {
	const [isDark, setIsDark] = useState(false);

	return (
		<div className={`cardContainer ${isDark ? 'darkTheme':''}`}>
			<header>
				<img src={picture} alt={`Foto de perfil ${name}`} />

				{/* TODO: mudar para um switch-checkbox */}
				<button onClick={()=> setIsDark(!isDark)}>dark</button>
				
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
				<a href=""><img src={twitterIcon} alt="Logo twitter" /></a>
				<a href=""><img src={facebookIcon} alt="Logo facebook" /></a>
				<a href=""><img src={instagramIcon} alt="Logo linkedin" /></a>
				<a href=""><img src={githubIcon} alt="Logo github" /></a>
			</section>
		</div>
	);
}
