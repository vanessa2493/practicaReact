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

export type UserPayload = Omit<User, "idDB" | "sessionToken">;
