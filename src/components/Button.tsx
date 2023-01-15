import { IconType } from "react-icons";
import { buttonType } from "../interfaces";

interface Props {
  Icon?: IconType;
  text: string;
  bgColor?: string;
  colorText?: string;
  type?: buttonType;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  text,
  bgColor,
  colorText,
  Icon,
  onClick,
  type,
  disabled,
}: Props) => {
  return (
    <button
      disabled={disabled}
      type={type ?? "button"}
      onClick={onClick}
      style={{
        backgroundColor: bgColor ? bgColor : "aqua",
        color: colorText ? colorText : "#FFFFFF",
      }}
    >
      {Icon && <Icon size={18} color={colorText ? colorText : "#FFFFFF"} />}
      <p>{text}</p>
    </button>
  );
};
