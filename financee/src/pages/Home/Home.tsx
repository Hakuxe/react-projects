import React from "react";
import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";

import styles from "./home.module.css";

export const Home: React.FC = () => {
	return (
		<section>
			<Header />
			<main className={styles.container}>
				<Card>
					<section>
						<button>--</button>
						OUtubro
						<button>--</button>
					</section>
					<section>
						<div>
							<p>Gastos:</p>
							<span>R$ 1000,00</span>
						</div>
						<div>
							<p>Gastos:</p>
							<span>R$ 1000,00</span>
						</div>
					</section>
				</Card>

				<Card >...</Card>

				<Card stylesObject={styles} extraClass={"red"}>...</Card>
			</main>
		</section>
	);
};
