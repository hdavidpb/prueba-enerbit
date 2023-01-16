import { AppDispatch } from "../../../redux/store";
import { Item } from "../../../redux/features/products/interface";
import { getFullDate } from "../../../utils/utils";
import { CiEdit } from "react-icons/ci";
import { Button } from "../../../components";
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { handleChangeShowModal } from "../../../redux/features/common/commonSlice";
import { getProductById } from "../../../redux/features/products/services";
import useDeleteProduct from "../../../hooks/useDeleteProduct";
import "../styles.css";

interface Props {
  item: Item;
}

const ItemList = ({ item }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { handleDeleteProduct } = useDeleteProduct();

  const handleShowItem = () => {
    dispatch(getProductById(item.id));
    dispatch(handleChangeShowModal({}));
  };

  const handleSelectProduct = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    dispatch(getProductById(item.id));
    dispatch(handleChangeShowModal({}));
  };

  const deleteProduct = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    handleDeleteProduct(item);
  };

  return (
    <div
      className="items-title-container product-list"
      onClick={handleShowItem}
    >
      <span>{item.serial}</span>
      <span>{item.connection_type}</span>
      <span>{item.storage_system}</span>
      <span>{item.condition}</span>
      <span>{item.owner}</span>
      <span>{item.location}</span>
      <span>{item.manufacturer}</span>
      <span>{getFullDate(item.purchase)}</span>
      <span>{item.i_max}</span>
      <span>{item.i_b}</span>
      <span>{item.i_n}</span>
      <span>{item.seals}</span>
      <span>{getFullDate(item.created_at)}</span>
      <span> {item.updated_at ? getFullDate(item.updated_at) : " - "} </span>
      <div className="actions-container">
        <Button
          Icon={CiEdit}
          text="Edit"
          bgColor="#f16f02"
          onClick={handleSelectProduct}
        />
        <Button
          Icon={MdDeleteSweep}
          text="Del"
          bgColor="red"
          onClick={deleteProduct}
        />
      </div>
    </div>
  );
};

export default ItemList;
