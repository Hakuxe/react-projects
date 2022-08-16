import React from "react";
import { Button, CardContainer, InfoSection } from "./cardInfoStyles";

export function CardInfo() {
	return (
		<CardContainer>
			<section className="month-select">
				<Button>--</Button>
				Outubro
				<Button> --</Button>
			</section>
			<section className="info">
				<InfoSection>
					<p>Receita</p>
					<span>R$ 1000,00</span>
				</InfoSection>
				<InfoSection>
					<p>Despesa</p>
					<span>R$ 500,00</span>
				</InfoSection>
				<InfoSection>
					<p>Balanço</p>
					<span>R$ 500,00</span>
				</InfoSection>
			</section>
		</CardContainer>
	);
}
