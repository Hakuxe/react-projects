import React from "react";
import menuIcon from "./assets/img/menu_black_24dp.svg";
import {ReactComponent as SearchIcon} from "./assets/img/search_black_24dp.svg";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1> visite 
                    <a
                        href="https://fonts.google.com/icons?selected=Material+Icons"
                    >
                        Material Icons
                    </a>
                </h1>
                <section>
                    
                    <img src={menuIcon} alt="close" />
                    <SearchIcon />
                </section>
            </div>
        );
    }
}