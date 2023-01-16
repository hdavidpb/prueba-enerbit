import "../styles.css";
import TableList from "./TableList";

const Table = () => {
  return (
    <div className="table-container">
      <div className="items-title-container title-header">
        <h6>Serial</h6>
        <h6>Connection Type</h6>
        <h6>Storage system</h6>
        <h6>Condition</h6>
        <h6>Owner</h6>
        <h6>Location</h6>
        <h6>Manufacturer</h6>
        <h6>Purchase</h6>
        <h6>IMax</h6>
        <h6>Ib</h6>
        <h6>In</h6>
        <h6>Seals</h6>
        <h6>Created At</h6>
        <h6>Updated At</h6>
        <h6></h6>
      </div>
      <TableList />
    </div>
  );
};

export default Table;
