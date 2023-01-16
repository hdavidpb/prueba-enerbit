import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  conditionType,
  connectionType,
  ownerType,
  storageSystemType,
} from "../interfaces";
import { Item, ItemForm } from "../redux/features/products/interface";

const initialState = {
  condition: conditionType.nuevo,
  connection_type: connectionType.directa,
  i_b: "",
  i_max: "",
  i_n: "",
  location: "",
  manufacturer: "",
  owner: ownerType.or,
  purchase: "",
  seals: "",
  serial: "",
  storage_system: storageSystemType.externo,
};

const useProductForm = () => {
  const { selectedProduct } = useSelector((store: RootState) => store.products);
  const [productForm, setProductForm] = useState<ItemForm>(initialState);

  useEffect(() => {
    if (selectedProduct) {
      setProductForm(selectedProduct);
    } else {
      setProductForm(initialState);
    }
  }, [selectedProduct]);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };
  const handleChangeSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  return {
    productForm,
    handleChangeValue,
    handleChangeSelectValue,
  };
};

export default useProductForm;
