import Layout from "./Layout";
import LoginForm from "./LoginForm";
import "./styles.css";

const Login = () => {
  return (
    <div className="login-view">
      <Layout title="Admin module">
        <LoginForm />
      </Layout>
    </div>
  );
};

export default Login;
