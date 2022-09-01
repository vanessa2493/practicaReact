import { FC, useState } from "react";
import { usersApi } from "../../../api/users";
import { UserPayload } from "../../../types";

const Form: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const user: UserPayload = { name, email, pass };
    usersApi.post(user);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user-name"> Nombre de Usuario</label>
        <input
          type="text"
          id="user-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email"> Email </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pass"> Contraseña </label>
        <input
          type="password"
          id="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <button> Sign Up </button>
    </form>
  );
};

export { Form as SignUpForm };
