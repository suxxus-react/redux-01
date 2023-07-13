export const Nothing = Symbol("nothing");
type Nothing = typeof Nothing;

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type FormEvent = React.FormEvent<HTMLFormElement>;

export type Children = {
  children: React.ReactNode;
};

type Dict<T> = Record<string, T>;

export type Maybe<T> = T | Nothing;

export type Theme = {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
};

export type UserDto = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  phone: string;
  image: string;
  domain: string;
};

export type UserCard = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
};

//
export type Users = {
  ids: number[];
  entities: Dict<UserCard>;
};
