import React from "react";
import { Header } from "../../components/Header/Header";

import styles from "./home.module.css";

export const Home: React.FC = () => {
	return (
		<section>
			<Header />
			<main className={styles.container}>...</main>
		</section>
	);
};
