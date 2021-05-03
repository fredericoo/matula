import { ButtonButton, ButtonLink } from "./types";
import { StyledButton } from "./styles";

const Button: React.FC<ButtonButton | ButtonLink> = (props) => {
	const buttonProps = { ...props };
	if (buttonProps.disabled) {
		if (buttonProps.href) {
			buttonProps.href = undefined;
		}
		if (buttonProps.onClick) {
			buttonProps.onClick = () => {};
		}
	}
	return <StyledButton {...buttonProps} as={props.href ? "a" : "button"} />;
};

Button.defaultProps = { size: "md", type: "outline" };

export default Button;
