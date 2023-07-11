import React from "react";
import styled from "styled-components";
import { Logo } from "../../styles/appStyles";
import { useToggleThemeContext } from "../../context";

const Head = styled.header`
  background-color: var(--header-bg);
  color: var(--header-color);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    cursor: pointer;
  }
`;

export function Header() {
  const { isDarkMode, toggle } = useToggleThemeContext();

  const clickHandler = () => [toggle((v) => !v)];

  return (
    <Head>
      <Logo data-testid="logo" />
      <i
        onClick={clickHandler}
        role="button"
        data-testid={isDarkMode ? "sun" : "moon"}
        className={`fa fa-${isDarkMode ? "sun" : "moon"}-o`}
        aria-hidden="true"
      ></i>
    </Head>
  );
}
