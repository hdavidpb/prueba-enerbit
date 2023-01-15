import "./styles.css";
import { IconType } from "react-icons";
import { inputType } from "../interfaces";

interface Props {
  Icon?: IconType;
  placeholder: string;
  type?: inputType;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({
  placeholder,
  Icon,
  type,
  onChange,
  name,
  value,
}: Props) => {
  return (
    <div className="input-field-container">
      {Icon && <Icon size={18} />}
      <input
        value={value}
        name={name}
        type={type ?? "text"}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
