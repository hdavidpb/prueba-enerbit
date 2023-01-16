import { VscClearAll } from "react-icons/vsc";
import { Input } from "../../components";
import "./styles.css";

const Filter = () => {
  return (
    <div className="filter-container">
      <Input
        placeholder="search by serial"
        name="search"
        onChange={() => console.log("SEARCHING")}
        value=""
      />
      <button>
        <VscClearAll size={15} color="gray" />
      </button>
    </div>
  );
};

export default Filter;
