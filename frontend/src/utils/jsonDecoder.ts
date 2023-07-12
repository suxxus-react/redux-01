import * as D from "json-decoder";
import { Maybe, Nothing } from "../types";

type UserDto = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  phone: string;
  image: string;
  domain: string;
};

export function userDataDecoder(data: unknown): Maybe<UserDto[]> {
  const UserDecoder = D.objectDecoder<UserDto>({
    id: D.numberDecoder,
    firstName: D.stringDecoder,
    lastName: D.stringDecoder,
    birthDate: D.stringDecoder,
    image: D.stringDecoder,
    email: D.stringDecoder,
    phone: D.stringDecoder,
    domain: D.stringDecoder,
  });

  const decoded = D.arrayDecoder(UserDecoder).decode(data);

  switch (decoded.type) {
    case "ERR":
      console.error(decoded.message);
      return Nothing;
    case "OK":
      return decoded.value;
  }
}
