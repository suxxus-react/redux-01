import styled from "styled-components";
import { logo } from "./assets";

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 32px;
  background-repeat: no-repeat;
  height: 30px;
  ${logo}

  &::after {
    content: "Waters Group";
    color: var(--header-color);
    font-weight: bold;
  }
`;
