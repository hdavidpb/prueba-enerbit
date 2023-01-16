import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/features/products/services";
import { AppDispatch, RootState } from "../../redux/store";
import Header from "./Header";
import Table from "./table/Table";
import Pagination from "./table/Pagination";
import Modal from "../../components/Modal";

import "./styles.css";
import FormProducts from "./FormProducts";
const AdminPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((store: RootState) => store.products);
  const { next_page, previous_page, page, pages } = products;
  useEffect(() => {
    dispatch(getAllProducts({}));
  }, []);

  return (
    <div className="container-page">
      <Header />
      <Table />
      <Pagination
        nextPage={next_page}
        previousPage={previous_page}
        page={page}
        pages={pages}
      />
      <Modal>
        <FormProducts />
      </Modal>
    </div>
  );
};

export default AdminPage;
