import React from "react";
import { CiEdit } from "react-icons/ci";
import { Button, Input, Select } from "../../components";
import useProductForm from "../../hooks/useProductForm";
import { inputType } from "../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useDeleteProduct from "../../hooks/useDeleteProduct";

const FormProducts = () => {
  const { selectedProduct, products } = useSelector(
    (store: RootState) => store.products
  );
  const { page } = products;
  const {
    handleCreateProduct,
    handleChangeValue,
    handleChangeSelectValue,
    handleUpdateProduct,
    productForm,
    errors,
  } = useProductForm();
  const { handleDeleteProduct } = useDeleteProduct();
  const handleUpdateSeletedProduct = () => {
    handleUpdateProduct(selectedProduct!.id);
  };

  return (
    <div className="product-form-container">
      <div className="form-field">
        <h5>Serial</h5>
        <Input
          name="serial"
          onChange={handleChangeValue}
          placeholder="serial"
          value={productForm.serial}
          error={errors.serial}
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
          type={inputType.number}
          error={errors.i_b}
        />
      </div>
      <div className="form-field">
        <h5>IMax</h5>
        <Input
          name="i_max"
          onChange={handleChangeValue}
          placeholder="IMax"
          value={productForm.i_max}
          type={inputType.number}
          error={errors.i_max}
        />
      </div>
      <div className="form-field">
        <h5>In</h5>
        <Input
          name="i_n"
          onChange={handleChangeValue}
          placeholder="In"
          value={productForm.i_n}
          type={inputType.number}
          error={errors.i_n}
        />
      </div>
      <div className="form-field">
        <h5>Location</h5>
        <Input
          name="location"
          onChange={handleChangeValue}
          placeholder="Location"
          value={productForm.location}
          error={errors.location}
        />
      </div>
      <div className="form-field">
        <h5>Manufacturer</h5>
        <Input
          name="manufacturer"
          onChange={handleChangeValue}
          placeholder="Manufacturer"
          value={productForm.manufacturer}
          error={errors.manufacturer}
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
          error={errors.purchase}
        />
      </div>
      <div className="form-field">
        <h5>Seals</h5>
        <Input
          name="seals"
          onChange={handleChangeValue}
          placeholder="Seals"
          value={productForm.seals}
          type={inputType.number}
          error={errors.seals}
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
        {selectedProduct && (
          <Button
            Icon={CiEdit}
            text="Edit"
            bgColor="#f16f02"
            onClick={handleUpdateSeletedProduct}
          />
        )}
        {!selectedProduct && (
          <Button
            Icon={CiEdit}
            text="Save"
            bgColor="rgb(28, 158, 98)"
            onClick={() => handleCreateProduct(page)}
          />
        )}
        {selectedProduct && (
          <Button
            text="Delete"
            bgColor="red"
            onClick={() => handleDeleteProduct(selectedProduct)}
          />
        )}
      </div>
    </div>
  );
};

export default FormProducts;
