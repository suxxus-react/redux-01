import * as D from "json-decoder";
import { Maybe, Nothing, UserDto, GithubUserDto } from "../types";

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

export function githubUserDecoder(data: unknown): Maybe<GithubUserDto> {
  const GithubUserDecoder = D.objectDecoder<GithubUserDto>({
    id: D.numberDecoder,
    name: D.stringDecoder,
    avatar_url: D.stringDecoder,
    email: D.oneOfDecoders(D.nullDecoder, D.undefinedDecoder, D.stringDecoder),
  });

  const decoded = GithubUserDecoder.decode(data);

  switch (decoded.type) {
    case "ERR":
      console.error(decoded.message);
      return Nothing;
    case "OK":
      return decoded.value;
  }
}
