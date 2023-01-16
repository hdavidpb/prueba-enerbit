import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  conditionType,
  connectionType,
  ownerType,
  storageSystemType,
} from "../interfaces";
import { ItemForm } from "../redux/features/products/interface";
import {
  createProduct,
  getAllProducts,
  updateProduct,
} from "../redux/features/products/services";
import { handleChangeShowModal } from "../redux/features/common/commonSlice";

const initialState = {
  condition: conditionType.nuevo,
  connection_type: connectionType.directa,
  i_b: +"",
  i_max: +"",
  i_n: +"",
  location: "",
  manufacturer: "",
  owner: ownerType.or,
  purchase: "",
  seals: +"",
  serial: "",
  storage_system: storageSystemType.externo,
};
interface IerrorsInitialState {
  condition?: boolean;
  connection_type?: boolean;
  i_b?: boolean;
  i_max?: boolean;
  i_n?: boolean;
  location?: boolean;
  manufacturer?: boolean;
  owner?: boolean;
  purchase?: boolean;
  seals?: boolean;
  serial?: boolean;
  storage_system?: boolean;
}
const useProductForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { selectedProduct } = useSelector((store: RootState) => store.products);
  const [productForm, setProductForm] = useState<ItemForm>(initialState);
  const [errors, setErrors] = useState<IerrorsInitialState>({});

  useEffect(() => {
    if (selectedProduct) {
      setProductForm(selectedProduct);
      setErrors({});
    } else {
      setProductForm(initialState);
    }
  }, [selectedProduct]);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors({ ...errors, [e.target.name]: false });
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };
  const handleChangeSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setErrors({ ...errors, [e.target.name]: false });
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleCreateProduct = (page: number) => {
    if (isValidForm()) return;
    dispatch(createProduct(productForm));
    setProductForm(initialState);
    dispatch(handleChangeShowModal({}));
    dispatch(getAllProducts({ page }));
  };

  const handleUpdateProduct = (productId: number) => {
    if (isValidForm()) return;
    dispatch(updateProduct({ productId, product: productForm }));
    setProductForm(initialState);
    dispatch(handleChangeShowModal({}));
  };

  const isValidForm = () => {
    let newErrors: IerrorsInitialState = {};

    Object.entries(productForm).forEach(([key, value]) => {
      if (value === "" || value === +"") {
        newErrors = { ...newErrors, [key]: true };
      } else {
        newErrors = { ...newErrors, [key]: false };
      }
    });
    setErrors(newErrors);

    return Object.values(newErrors).some((value) => value);
  };

  return {
    errors,
    productForm,
    isValidForm,
    handleChangeValue,
    handleCreateProduct,
    handleUpdateProduct,

    handleChangeSelectValue,
  };
};

export default useProductForm;
