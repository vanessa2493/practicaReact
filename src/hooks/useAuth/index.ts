import { usersApi } from "../../api";
import { generateUserToken } from "../../helpers";
import { LoginPayLoad } from "../../types";

const useAuth = () => {
  const login = async (payLoad: LoginPayLoad) => {
    const users = await usersApi.getAll();

    const loggedUser = users.find(
      (user) => user.email === payLoad.email && user.pass === payLoad.pass
    );

    if (loggedUser) {
      const token = await generateUserToken(loggedUser.idDB);
      if (token) {
        localStorage.setItem("userToken", token);
      }
    }
  };
  return [login];
};

export { useAuth };
