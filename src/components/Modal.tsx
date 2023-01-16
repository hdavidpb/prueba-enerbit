import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { handleChangeShowModal } from "../redux/features/common/commonSlice";
import { clearSelectedProduct } from "../redux/features/products/productsSlice";

interface Props {
  children: JSX.Element;
}

const Modal = ({ children }: Props) => {
  const { showModal } = useSelector((store: RootState) => store.common);
  const { selectedProduct } = useSelector((store: RootState) => store.products);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(handleChangeShowModal({}));
    dispatch(clearSelectedProduct());
  };

  return (
    <div
      onClick={handleClose}
      className={showModal ? "modal-container opened-modal" : "modal-container"}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>
            {selectedProduct
              ? `# ${selectedProduct.serial}`
              : "Add a new product"}
          </h3>
          <span onClick={handleClose}>X</span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
