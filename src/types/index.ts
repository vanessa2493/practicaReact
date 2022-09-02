export type Data = {
  idDB?: string;
  name: string;
  slug: string;
};

export type ObjectSimple = {
  name: string;
  slug: string;
};

export type User = {
  name: string;
  email: string;
  pass: string;
  idDB: string;
  sessionToken?: string;
};

export type LoginPayLoad = {
  email: string;
  pass: string;
};

export type UserPayload = Omit<User, "idDB" | "sessionToken">;
