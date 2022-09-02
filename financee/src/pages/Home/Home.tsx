import React, { useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";

import styles from "./home.module.css";
import { Form } from "../../components/Form/Form";
import { BudgedInfo } from "../../components/BudgedInfo/BudgedInfo";

import data from "../../../db.json";

export const Home: React.FC = () => {
	const [selectedMonth, setSelectedMonth] = useState(1); // mês padrão janeiro

	const monthData = data.find((item) => item.monthNumber == selectedMonth);

	function handleMonthSelector() {
		if (selectedMonth <= 12) {
			setSelectedMonth((prevMonth) => prevMonth + 1);
		} else {
			setSelectedMonth(1);
		}
	}	

	return (
		<section>
			<Header />
			<main className={styles.container}>
				<Card stylesObject={styles} extraClass="resumeContainer">
					<section className={styles.monthSelector}>
						<button>
							<CaretLeft size={16} />
						</button>
						<span>{monthData?.month}</span>
						<button onClick={handleMonthSelector}>
							<CaretRight size={16} />
						</button>
					</section>
					<section className={styles.resume}>
						<BudgedInfo key={1} info={monthData?.expense.toString()} title="Gastos" />
						<BudgedInfo key={2} info={monthData?.income.toString()} title="Ganhos" />
						<BudgedInfo key={3} info="R$ 1000,00" title="Balanço" />
					</section>
				</Card>

				<Card>
					<Form />
				</Card>

				<Card stylesObject={styles} extraClass={"red"}>
					<table className={styles.history}>
						<thead>
							<tr>
								<th>Data</th>
								<th>Categoria</th>
								<th>Título</th>
								<th>Valor</th>
							</tr>
						</thead>
						<tbody>
							{monthData?.history.map((item, index) => {
								const { amount, title, category, date } = item;
								return (
									<tr key={index}>
										<td>{date}</td>
										<td>{category}</td>
										<td>{title}</td>
										<td>{amount}</td>
									</tr>
								);
							})}
						</tbody>
						<tbody></tbody>
					</table>
				</Card>
			</main>
		</section>
	);
};
