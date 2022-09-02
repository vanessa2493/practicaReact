import { FC, useState } from "react";
import { LoginPayLoad } from "../../../types";

type Props = {
  onSubmit: (formData: LoginPayLoad) => void;
};

const Form: FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ email: "", pass: "" });

  return (
    <form
      action="submit"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          value={formData.pass}
          onChange={(e) =>
            setFormData((prevState) => ({ ...prevState, pass: e.target.value }))
          }
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export { Form as LoginForm };
