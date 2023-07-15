import { Nothing, Maybe, Token } from "../types";
import constants from "../constants";

const { STORAGE_TOKEN } = constants;

export function setItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getItem(key: string) {
  return localStorage.getItem(key);
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
}

export function getTokenFromStorage(key: string): Maybe<Token<string>> {
  return getItem(key) || Nothing;
}

export function setTokenOnStorage(value: string) {
  setItem(STORAGE_TOKEN, value);
}
