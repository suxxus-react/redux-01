import React from "react";
import styled from "styled-components";
import { device } from "../../styles/globalStyles";

const LoginOption = styled.div`
  border: 1px solid var(--button-border-color);
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: var(--button-bg-hover);
  }
`;

const LoginWrapper = styled.div`
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
`;

export function Login() {
  return (
    <LoginWrapper>
      <h2>Welcome, please login with</h2>
      <form>
        <LoginOption role="button" data-testid="github-login-button">
          <i className="fa fa-github" aria-hidden="true"></i>
          <input type="submit" value="GitHub" />
        </LoginOption>
      </form>
    </LoginWrapper>
  );
}
