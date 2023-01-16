import "./styles.css";

interface Props {
  logo?: string;
  title?: string;
  children: JSX.Element;
}
const Layout = ({ logo, title, children }: Props) => {
  return (
    <div className="login-layout-container">
      <div className="logo-container">
        <img
          src={logo ?? "https://enerbit.co/img/mainLogo.bea5a270.svg"}
          alt="Enerbit logo"
        />
        <h1>{title ?? "Module"}</h1>
      </div>
      {children}
    </div>
  );
};

export default Layout;
