import React from "react";
import { useState } from "react";
import {
  conditionType,
  connectionType,
  ownerType,
  ProductForm,
  storageSystemType,
} from "../interfaces";

const useProductForm = () => {
  const [productForm, setProductForm] = useState({
    condition: conditionType.nuevo,
    connection_type: connectionType.directa,
    i_b: "",
    i_max: "",
    i_n: "",
    location: "",
    manufacturer: "",
    owner: ownerType.fr,
    purchase: "",
    seals: "",
    serial: "",
    storage_system: storageSystemType.externo,
  });

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };
  const handleChangeSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  return { productForm, handleChangeValue, handleChangeSelectValue };
};

export default useProductForm;
