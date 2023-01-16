import "../styles.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { getAllProducts } from "../../../redux/features/products/services";
import { Button } from "../../../components";

interface Props {
  nextPage: number | null;
  previousPage: number | null;
  size?: number;
  page: number;
  pages: number;
}

const Pagination = ({ nextPage, previousPage, size, page, pages }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="pagination-container">
      <p className="page-info">{`Page ${page + 1} of ${pages}`}</p>
      <button
        disabled={previousPage === null}
        onClick={() => dispatch(getAllProducts({ page: previousPage!, size }))}
      >
        <span> {"<"}</span>
      </button>
      <button
        disabled={nextPage === null}
        onClick={() => dispatch(getAllProducts({ page: nextPage!, size }))}
      >
        <span>{">"}</span>
      </button>
    </div>
  );
};

export default Pagination;
