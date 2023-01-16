import Swal from "sweetalert2";
import { Item } from "../redux/features/products/interface";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/features/products/services";
import { AppDispatch } from "../redux/store";
import { handleChangeShowModal } from "../redux/features/common/commonSlice";

const useDeleteProduct = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteProduct = (item: Item) => {
    Swal.fire({
      title: "Are you sure you want to delete this product?",
      text: `# ${item.serial}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#523787",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(item.id));
        Swal.fire(
          "Deleted!",
          `The product with serial "${item.serial}" was successfully deleted`,
          "success"
        );
        dispatch(handleChangeShowModal({ show: false }));
      }
    });
  };

  return {
    handleDeleteProduct,
  };
};

export default useDeleteProduct;
