import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/features/products/services";
import { AppDispatch } from "../../redux/store";
import Header from "./Header";
import Table from "./table/Table";
import Pagination from "./table/Pagination";
import Modal from "../../components/Modal";

import "./styles.css";
import FormProducts from "./FormProducts";
const AdminPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts({}));
  }, []);

  return (
    <div className="container-page">
      <Header />
      <Table />
      <Pagination />
      <Modal>
        <FormProducts />
      </Modal>
    </div>
  );
};

export default AdminPage;
