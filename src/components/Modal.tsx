import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { handleChangeShowModal } from "../redux/features/common/commonSlice";

interface Props {
  children: JSX.Element;
}

const Modal = ({ children }: Props) => {
  const { showModal } = useSelector((store: RootState) => store.common);
  const dispatch = useDispatch();
  return (
    <div
      //   onClick={() => dispatch(handleChangeShowModal())}
      className={showModal ? "modal-container opened-modal" : "modal-container"}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Product</h3>
          <span>X</span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
