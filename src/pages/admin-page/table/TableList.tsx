import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { RootState } from "../../../redux/store";
import ItemList from "./ItemList";
import Loader from "../../../components/Loader";
import { NotResults } from "../../../components";

import "../styles.css";
const TableList = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const { products, loadingProducts } = useSelector(
    (store: RootState) => store.products
  );

  const { items } = products;

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current!.scrollTop = 9999;
    }
  }, [tableRef, items]);

  return (
    <div ref={tableRef} className="items-table-container">
      {!loadingProducts && items.length === 0 && (
        <NotResults image="https://res.cloudinary.com/dcgvgeoqe/image/upload/v1672167867/not-found_xedznu.png" />
      )}
      {!loadingProducts ? (
        items.map((item) => <ItemList key={item.id} item={item} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TableList;
