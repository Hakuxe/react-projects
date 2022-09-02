interface Props {
   title: string;
   info: string | undefined;
}

export const BudgedInfo = ({title, info}: Props) => {
	return (
		<div>
			<p>{title}</p>
			<span>{info? info : ""}</span>
		</div>
	);
};
