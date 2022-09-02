import { mapToArray } from "../../helpers";
import { Data, User, UserPayload } from "../../types";

const post = async (data: UserPayload) => {
  await fetch(
    "https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios.json",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
};

const getAll = async (): Promise<User[]> => {
  const get = await fetch(
    "https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios.json"
  );
  const data = await get.json();
  return mapToArray(data);
};

const get = async (user: string) => {
  const get = await fetch(
    `https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios/${user}.json`
  );
  const data = await get.json();
  return data;
};

const del = async (user: string) => {
  await fetch(
    `https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios/${user}.json`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );
};

const patch = async (id: string, payload: Partial<User>) => {
  const resp = await fetch(
    `https://todolist-f94ed-default-rtdb.firebaseio.com/usuarios/${id}.json`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );
  const data = await resp.json();

  return data;
};

export const usersApi = { post, get, getAll, del, patch };
