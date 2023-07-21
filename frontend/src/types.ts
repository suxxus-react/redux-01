export const Nothing = Symbol("nothing");
type Nothing = typeof Nothing;

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ClickEvent = React.MouseEvent<HTMLElement>;
export type FormEvent = React.FormEvent<HTMLFormElement>;

export type Children = {
  children: React.ReactNode;
};

export type Dict<T> = Record<string, T>;

export type Maybe<T> = T | Nothing;

export type Theme = {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
};

export type Token<T> = T;

export type User = {
  id: number;
  name: string;
  image: string;
  email: string;
};

export type LoggedIn = {
  kind: "LoggedIn";
  token: Token<string>;
  user: User;
};

type Unknown = { kind: "Unknown" };
type LoggedOut = { kind: "LoggedOut" };

export type AuthenticationStatus = Unknown | LoggedIn | LoggedOut;

export type Auth = {
  status: AuthenticationStatus;
};

export type UserDto = {
  id: number;
  name: string;
  image: string;
  email?: string | null;
  token: string;
};
