import "./iconButtonStyles.css";

/**
 * IconButton
 * @param {string} icon  caminho para o icone ser mostrado no botão
 * @param {string} iconAlt  texto alternativo para o icone
 * @param {string} label  texto a ser exibido no botão
 * @param {function} [action]  opicional - evento de onClick
 * @param {string} [backgroundColor]  opicional -
 * @param {function} [textColor]      opicional -
 * @param {boolean} [hasBorder]       opicional -
 */
export default function IconButton({
	icon,
	iconAlt,
	label,
	action,
	backgroundColor,
	textColor,
	hasBorder,
}) {
	return (
		<button
			className="button"
			style={{
				backgroundColor: backgroundColor,
				color: textColor,
				border: hasBorder ? "" : "none",
			}}
			onClick={action ? action : () => {}}
		>
			<img src={icon} alt={iconAlt} />
			{label}
		</button>
	);
}
