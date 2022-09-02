import { FC } from "react";
import { Layout } from "../../components/common";
import { SignUpForm } from "./Form";

const SignUp: FC = () => {
  return (
    <Layout page="sign-up">
      <SignUpForm />
    </Layout>
  );
};

export { SignUp };
