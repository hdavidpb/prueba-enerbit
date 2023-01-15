import { Button, Input } from "../../components";
import { AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { buttonType, inputType } from "../../interfaces";
import "./styles.css";
import useLoginForm from "../../hooks/useLoginForm";

const LoginForm = () => {
  const { formValues, handleChangeValue, handleLoginSubmit, disabledForm } =
    useLoginForm();

  return (
    <div className="form-box-container">
      <div className="form-container">
        <h1>Welcome!</h1>
        <form onSubmit={handleLoginSubmit}>
          <Input
            placeholder="Username"
            Icon={AiOutlineUser}
            name="username"
            value={formValues.username}
            onChange={handleChangeValue}
          />
          <Input
            placeholder="Password"
            type={inputType.password}
            Icon={MdPassword}
            name="password"
            value={formValues.password}
            onChange={handleChangeValue}
          />
          <Button
            disabled={disabledForm}
            type={buttonType.submit}
            text="Login"
            bgColor="#523787"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
