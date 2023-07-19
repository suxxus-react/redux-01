import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../../styles/appStyles";
import { useToggleThemeContext } from "../../context";
import { useAppSelector } from "../../app";
import { AuthenticationStatus, LoggedIn } from "../../types";

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
  const status: AuthenticationStatus = useAppSelector(
    (state) => state.auth.status
  );

  let isLoggedIn = false;

  const clickHandler = () => {
    toggle((v) => !v);
  };

  console.info(`status: ${JSON.stringify(status)}`);

  switch (status) {
    case "Unknown":
    case "LoggedOut":
      isLoggedIn = false;
      break;
    case "LoggedIn":
      isLoggedIn = true;
      console.info("is loggedIn", JSON.stringify(status, null, 2));
      break;
  }

  return (
    <Head>
      <Logo data-testid="logo" />
      <Commands>
        {isLoggedIn && <Link to="/">signout</Link>}
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
