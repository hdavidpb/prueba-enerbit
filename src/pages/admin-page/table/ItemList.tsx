import { Item } from "../../../redux/features/products/interface";
import { getFullDate } from "../../../utils/utils";
import "../styles.css";

interface Props {
  item: Item;
}

const ItemList = ({ item }: Props) => {
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
      <span></span>
    </div>
  );
};

export default ItemList;
