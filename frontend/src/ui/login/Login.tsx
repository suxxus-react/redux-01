import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../styles/globalStyles";
import constants from "../../constants";

const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  text-align: center;
  min-height: 90vh;

  @media (${device.tablet}) {
    margin: auto;
    max-width: 400px;
  }

  a {
    border: 1px solid var(--button-border-color);
    border-radius: 5px;
    padding: 10px;

    span {
      margin-left: 5px;
    }

    &:hover {
      background-color: var(--button-bg-hover);
    }
  }
`;

export function Login() {
  return (
    <SignIn>
      <h2>Welcome, please login with</h2>
      <Link to={constants.GITHUB_AUTH} data-testid="auth-with-github">
        <i className="fa fa-github" aria-hidden="true"></i>
        <span>Github</span>
      </Link>
    </SignIn>
  );
}
