import { ISelectOptions } from "../interfaces";
import "./styles.css";

interface Props {
  options: ISelectOptions[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  value: string;
}

export const Select = ({ options, onChange, name, value }: Props) => {
  return (
    <div className="input-field-container">
      <select onChange={onChange} name={name} value={value}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
