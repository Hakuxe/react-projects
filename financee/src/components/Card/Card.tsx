import { ReactNode } from "react";

import styles from "./card.module.css";

interface ICardProps {
	children: ReactNode;
	stylesObject?: CSSModuleClasses; //modulo de classes do component pai
	extraClass?: string;
}
export const Card = ({ children, extraClass, stylesObject }: ICardProps) => {
	const propsStyles = stylesObject ? stylesObject[`${extraClass}`] : "";

	return (
		<div className={[styles["card"], propsStyles].join(" ")}>{children}</div>
	);
};
