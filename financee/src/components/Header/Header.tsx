import styles from "./header.module.css";

export const Header: React.FC = () => {
	return (
		<header className={styles.headerContainer}>
			<h1>Financee</h1>
		</header>
	);
};
