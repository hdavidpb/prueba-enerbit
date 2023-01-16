import { VscClearAll } from "react-icons/vsc";
import { Input } from "../../components";
import "./styles.css";
import useFilterSearch from "../../hooks/useFilterSearch";

const Filter = () => {
  const { onQueryChanged, serial, handleClearFilter } = useFilterSearch();

  return (
    <div className="filter-container">
      <Input
        placeholder="search by serial"
        name="search"
        onChange={onQueryChanged}
        value={serial}
      />
      <button onClick={handleClearFilter}>
        <VscClearAll size={15} color="gray" />
      </button>
    </div>
  );
};

export default Filter;
