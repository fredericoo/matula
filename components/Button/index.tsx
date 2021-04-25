import { ButtonButton, ButtonLink } from "./types";
import { StyledButton } from "./styles";

const Button: React.FC<ButtonButton | ButtonLink> = (props) => {
	if (props.disabled) {
		props.href = undefined;
		props.onClick = () => {};
	}
	return <StyledButton {...props} as={props.href ? "a" : "button"} />;
};

Button.defaultProps = { size: "md", type: "outline" };

export default Button;
