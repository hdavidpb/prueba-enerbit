import { HiSparkles } from "react-icons/hi";
import { VscClearAll } from "react-icons/vsc";
import { Button, Input } from "../../components";
import Filter from "./Filter";
import "./styles.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-header">
        <img
          src="https://enerbit.co/img/mainLogo.bea5a270.svg"
          alt="Enerbit logo"
        />
        <Filter />
      </div>
      <Button bgColor="#1c9e62" text="Add product" Icon={HiSparkles} />
    </div>
  );
};

export default Header;
