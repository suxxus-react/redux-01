export const Nothing = Symbol("nothing");
type Nothing = typeof Nothing;

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ClickEvent = React.MouseEvent<HTMLElement>;
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

export type Token<T> = T | null;

export type UserToken = {
  token: Token<string> | null;
};

export type GithubUserDto = {
  id: number;
  name: string;
  avatar_url: string;
  email?: string | null;
};

export type GithubUser = {
  id: string;
  name: string;
  avatar: string;
  email: string;
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
  id: string;
  firstName: string;
  lastName: string;
  image: string;
};

//
export type Users = {
  ids: string[];
  entities: Dict<UserCard>;
};
