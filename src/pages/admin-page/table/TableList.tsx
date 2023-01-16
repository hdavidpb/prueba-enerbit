import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import "../styles.css";
import { RootState } from "../../../redux/store";
import Loader from "../../../components/Loader";

const TableList = () => {
  const { products, loadingProducts } = useSelector(
    (store: RootState) => store.products
  );

  const { items } = products;

  return (
    <div className="items-table-container">
      {!loadingProducts ? (
        items.map((item) => <ItemList key={item.id} item={item} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TableList;
