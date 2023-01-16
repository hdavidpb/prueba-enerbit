import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/features/products/services";
import { AppDispatch } from "../../redux/store";
import { inputType } from "../../interfaces";
import { Button, Input, Select } from "../../components/";
import { CiEdit } from "react-icons/ci";
import Header from "./Header";
import Table from "./table/Table";
import Pagination from "./table/Pagination";
import Modal from "../../components/Modal";
import useProductForm from "../../hooks/useProductForm";
import "./styles.css";
const AdminPage = () => {
  const { handleChangeValue, handleChangeSelectValue, productForm } =
    useProductForm();

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
        <div className="product-form-container">
          <div className="form-field">
            <h5>Serial</h5>
            <Input
              name="serial"
              onChange={handleChangeValue}
              placeholder="serial"
              value={productForm.serial}
            />
          </div>
          <div className="form-field">
            <h5>Connection Type</h5>
            <Select
              name="connection_type"
              onChange={handleChangeSelectValue}
              value={productForm.connection_type}
              options={[
                { value: "directa", label: "directa" },
                { value: "semi-directa", label: "semi directa" },
                { value: "indirecta", label: "indirecta" },
              ]}
            />
          </div>
          <div className="form-field">
            <h5>Ib</h5>
            <Input
              name="i_b"
              onChange={handleChangeValue}
              placeholder="Ib"
              value={productForm.i_b}
            />
          </div>
          <div className="form-field">
            <h5>IMax</h5>
            <Input
              name="i_max"
              onChange={handleChangeValue}
              placeholder="IMax"
              value={productForm.i_max}
            />
          </div>
          <div className="form-field">
            <h5>In</h5>
            <Input
              name="i_n"
              onChange={handleChangeValue}
              placeholder="In"
              value={productForm.i_n}
            />
          </div>
          <div className="form-field">
            <h5>Location</h5>
            <Input
              name="location"
              onChange={handleChangeValue}
              placeholder="Location"
              value={productForm.location}
            />
          </div>
          <div className="form-field">
            <h5>Manufacturer</h5>
            <Input
              name="manufacturer"
              onChange={handleChangeValue}
              placeholder="Manufacturer"
              value={productForm.manufacturer}
            />
          </div>
          <div className="form-field">
            <h5>Owner</h5>
            <Select
              name="owner"
              onChange={handleChangeSelectValue}
              options={[
                { value: "RF", label: "RF" },
                { value: "OR", label: "OR" },
              ]}
              value={productForm.owner}
            />
          </div>
          <div className="form-field">
            <h5>Purchase</h5>
            <Input
              type={inputType.datetime}
              name="purchase"
              onChange={handleChangeValue}
              placeholder="Purchase"
              value={productForm.purchase}
            />
          </div>
          <div className="form-field">
            <h5>Seals</h5>
            <Input
              name="seals"
              onChange={handleChangeValue}
              placeholder="Seals"
              value={productForm.seals}
            />
          </div>
          <div className="form-field">
            <h5>Storage System</h5>
            <Select
              name="storage_system"
              onChange={handleChangeSelectValue}
              options={[
                { value: "interno", label: "interno" },
                { value: "externo", label: "externo" },
              ]}
              value={productForm.storage_system}
            />
          </div>
          <div className="form-field">
            <h5>Condition</h5>
            <Select
              name="condition"
              onChange={handleChangeSelectValue}
              options={[
                { value: "nuevo", label: "nuevo" },
                { value: "usado", label: "usado" },
              ]}
              value={productForm.condition}
            />
          </div>

          <div className="product-options">
            <Button Icon={CiEdit} text="Edit" bgColor="#f16f02" />
            <Button text="Delete" bgColor="red" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminPage;
