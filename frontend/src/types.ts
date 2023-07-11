export const Nothing = Symbol("nothing");
type Nothing = typeof Nothing;

export type Children = {
  children: React.ReactNode;
};

export type Maybe<T> = T | Nothing;

export type Card = {
  id: number;
  name: string;
  src: string;
  domain: string;
  email: string;
};

export type Theme = {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
};

export type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  image: string;
  email: string;
  phone: string;
  domain: string;
};

type Dict<T> = Record<string, T>;

export type Users = {
  ids: number[];
  data: Dict<UserData>;
};
