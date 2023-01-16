import { HiSparkles } from "react-icons/hi";
import { IoMdExit } from "react-icons/io";
import { Button, Input } from "../../components";
import { useDispatch } from "react-redux";
import { handleChangeShowModal } from "../../redux/features/common/commonSlice";
import Filter from "./Filter";
import "./styles.css";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="header-container">
      <div className="left-header">
        <img
          src="https://enerbit.co/img/mainLogo.bea5a270.svg"
          alt="Enerbit logo"
        />
        <Filter />
      </div>
      <div className="header-actions-container">
        <Button
          bgColor="#1c9e62"
          text="Add product"
          Icon={HiSparkles}
          onClick={() => dispatch(handleChangeShowModal({}))}
        />
        <Button
          bgColor="#e61b1b"
          text=""
          Icon={IoMdExit}
          onClick={handleLogOut}
        />
      </div>
    </div>
  );
};

export default Header;
