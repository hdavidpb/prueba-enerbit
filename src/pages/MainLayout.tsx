import AdminPage from "../pages/admin-page";
import Login from "../pages/login";

const MainLayout = () => {
  const logged = localStorage.getItem("logged");

  return logged ? <AdminPage /> : <Login />;
};

export default MainLayout;
