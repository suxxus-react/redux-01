import {
  setItem,
  getItem,
  removeItem,
  getTokenFromStorage,
  setTokenOnStorage,
} from "./";
import constants from "../constants";
import { Maybe, Token } from "../types";

const { STORAGE_TOKEN } = constants;

const zero = 0;
const one = 1;

describe("Local storage", () => {
  beforeEach(() => {
    // to fully reset the state between tests, clear the storage
    localStorage.clear();
    // and reset all mocks
    jest.clearAllMocks();
  });

  test("should save to localStorage", () => {
    const KEY = "foo",
      VALUE = "bar";
    setItem(KEY, VALUE);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(one);
  });
  //
  test("should have remove item in the localStorage", () => {
    removeItem("foo");
    expect(localStorage.removeItem).toHaveBeenCalledTimes(one);
    expect(localStorage.__STORE__).toEqual({}); // check store values
    expect(localStorage.length).toBe(zero); // or check length
  });

  test("should not impact the next test", () => {
    const KEY = "buzz",
      VALUE = "fizz";
    setItem(KEY, VALUE);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(one);
  });
  //
  test("Given a key should get data from storage", () => {
    const KEY = "buzz",
      VALUE = "fizz";
    setItem(KEY, VALUE);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(one);

    const actual = getItem(KEY);

    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
    expect(actual).toBe(VALUE);
  });

  test("Given a key, should get Maybe Token", () => {
    const KEY = STORAGE_TOKEN;
    const VALUE = "fizz";
    setItem(KEY, VALUE);

    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(one);

    const actual: Maybe<Token<string>> = getTokenFromStorage();
    expect(actual).toBe(VALUE);
  });

  test("Given the token should set on localStorage", () => {
    const KEY = STORAGE_TOKEN;
    const VALUE = "fizz";

    const actual = null;
    const expected = VALUE;

    expect(getItem(KEY)).toBe(actual);

    setTokenOnStorage(VALUE);
    expect(getItem(KEY)).toBe(expected);
  });
});
