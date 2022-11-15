import { useState } from "react";
import Switch from "react-switch";

import IconButton from "../IconButton/IconButton";
import InfoSection from "../InfoSection/InfoSection";

import "./businessCardStyles.css";

import mailIcon from "../../assets/mail.svg";
import twitterIcon from "../../assets/twitter_icon.svg";
import facebookIcon from "../../assets/facebook_icon.svg";
import githubIcon from "../../assets/gitHub_icon.svg";
import instagramIcon from "../../assets/instagram_icon.svg";
import linkedinIcon from "../../assets/linkedin_icon.svg";
import moonIcon from "../../assets/moon.svg";
import sunIcon from "../../assets/sun.svg";

export default function BusinesCard({ picture, name, job, extraInfo }) {
	const [isDark, setIsDark] = useState(false);

	return (
		<div className={`cardContainer ${isDark ? "darkTheme" : ""}`}>
			<header>
				<img src={picture} alt={`Foto de perfil ${name}`} />
				<div className="react-switch-container">
					<Switch
						id="dark-theme-switch"
						className="react-switch"
						checked={isDark}
						onChange={() => setIsDark(!isDark)}
						onColor="#4d4d4d"
						offColor="#e1e1e1"
						boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
						height={20}
						width={48}
						handleDiameter={25}
						checkedIcon={
							<img src={sunIcon} width={30} height={20} alt="" />
						}
						uncheckedIcon={
							<img src={moonIcon} width={40} height={18} alt="" />
						}
					/>
				</div>

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
				<a href="">
					<img src={twitterIcon} alt="Logo twitter" />
				</a>
				<a href="">
					<img src={facebookIcon} alt="Logo facebook" />
				</a>
				<a href="">
					<img src={instagramIcon} alt="Logo linkedin" />
				</a>
				<a href="">
					<img src={githubIcon} alt="Logo github" />
				</a>
			</section>
		</div>
	);
}
