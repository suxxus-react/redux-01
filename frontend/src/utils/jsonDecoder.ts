import * as D from "json-decoder";
import { Maybe, Nothing, UserDto } from "../types";

export function userDecoder(data: unknown): Maybe<UserDto> {
  const UserDecoder = D.objectDecoder<UserDto>({
    id: D.numberDecoder,
    name: D.stringDecoder,
    image: D.stringDecoder,
    email: D.oneOfDecoders(D.nullDecoder, D.undefinedDecoder, D.stringDecoder),
    token: D.stringDecoder,
  });

  const decoded = UserDecoder.decode(data);

  switch (decoded.type) {
    case "ERR":
      console.error(decoded.message);
      return Nothing;
    case "OK":
      return decoded.value;
  }
}
