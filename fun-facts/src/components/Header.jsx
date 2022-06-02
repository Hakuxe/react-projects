import logo from "../logo.svg";

export default function Header() {
	return (
		<header>
			<nav className="nav">
				<img src={logo} className="nav-logo" />

				<div className="mobile-menu">
					<div className="line-1"></div>
					<div className="line-2"></div>
					<div className="line-3"></div>
				</div>

				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}
