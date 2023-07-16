import * as D from "json-decoder";
import { Maybe, Nothing, GithubUserDto } from "../types";

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
