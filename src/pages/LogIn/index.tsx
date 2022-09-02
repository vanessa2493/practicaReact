import { Layout } from "../../components";
import { useAuth } from "../../hooks";
import { LoginPayLoad } from "../../types";
import { LoginForm } from "./Form";

const LogIn = () => {
  const handleSubmit = (formData: LoginPayLoad) => {
    login(formData);
  };
  const [login] = useAuth();
  return (
    <Layout page="login" hideNav>
      <LoginForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export { LogIn };
