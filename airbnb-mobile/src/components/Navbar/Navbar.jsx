import './styles.css';

import logoAirbnb from "../../assets/airbnb.svg";

export default function Navbar() {
	return(
      <header>
         <nav className="navbar">
            <img id="logo" src={logoAirbnb} alt="logo Airbnb" />
         </nav>
      </header>
   );
}
