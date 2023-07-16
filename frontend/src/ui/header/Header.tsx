import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../../styles/appStyles";
import { useToggleThemeContext } from "../../context";
import { useAppSelector } from "../../app";

const Head = styled.header`
  background-color: var(--header-bg);
  color: var(--header-color);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Commands = styled.div`
  a {
    margin-right: 20px;
  }

  i {
    cursor: pointer;
  }
`;

export function Header() {
  const { isDarkMode, toggle } = useToggleThemeContext();
  const token = useAppSelector((state) => state.auth.token);

  const clickHandler = () => {
    toggle((v) => !v);
  };

  return (
    <Head>
      <Logo data-testid="logo" />
      <Commands>
        {token && <Link to="/">signout</Link>}
        <i
          onClick={clickHandler}
          role="button"
          data-testid={isDarkMode ? "sun" : "moon"}
          className={`fa fa-${isDarkMode ? "sun" : "moon"}-o`}
          aria-hidden="true"
        ></i>
      </Commands>
    </Head>
  );
}
