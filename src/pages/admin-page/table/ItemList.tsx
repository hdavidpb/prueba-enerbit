import { Item } from "../../../redux/features/products/interface";
import { getFullDate } from "../../../utils/utils";
import { CiEdit } from "react-icons/ci";
import "../styles.css";
import { Button } from "../../../components";
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../../redux/features/products/productsSlice";
import { handleChangeShowModal } from "../../../redux/features/common/commonSlice";

interface Props {
  item: Item;
}

const ItemList = ({ item }: Props) => {
  const dispatch = useDispatch();

  const handleSelectProduct = () => {
    dispatch(selectProduct(item));
    dispatch(handleChangeShowModal());
  };

  return (
    <div className="items-title-container product-list">
      <span>{item.serial}</span>
      <span>{item.connection_type}</span>
      <span>{item.storage_system}</span>
      <span>{item.condition}</span>
      <span>{item.owner}</span>
      <span>{item.location}</span>
      <span>{item.manufacturer}</span>
      <span>{item.purchase}</span>
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
        <Button Icon={MdDeleteSweep} text="Del" bgColor="red" />
      </div>
    </div>
  );
};

export default ItemList;
