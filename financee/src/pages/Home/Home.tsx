import React from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";

import styles from "./home.module.css";
import { Form } from "../../components/Form/Form";

export const Home: React.FC = () => {
	return (
		<section>
			<Header />
			<main className={styles.container}>
				<Card stylesObject={styles} extraClass="resumeContainer">
					<section className={styles.monthSelector}>
						<button>
							<CaretLeft size={16} />
						</button>
						<span>Outubro 2021</span>
						<button>
							<CaretRight size={16} />
						</button>
					</section>
					<section className={styles.resume}>
						<div>
							<p>Gastos:</p>
							<span>R$ 1000,00</span>
						</div>
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

				<Card>
					<Form />
				</Card>

				<Card stylesObject={styles} extraClass={"red"}>
					...
				</Card>
			</main>
		</section>
	);
};
