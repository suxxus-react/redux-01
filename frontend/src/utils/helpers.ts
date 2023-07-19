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

export function getTokenFromStorage(): Maybe<Token<string>> {
  return getItem(STORAGE_TOKEN) || Nothing;
}

export function setTokenOnStorage(value: string) {
  setItem(STORAGE_TOKEN, value);
}

export function removeTokenFromStorage() {
  removeItem(STORAGE_TOKEN);
}
