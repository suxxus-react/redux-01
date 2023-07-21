import React from "react";
import styled from "styled-components";
import { User } from "../../types";

const Container = styled.div`
  position: relative;
  border-radius: 50px 0 0 50px;
  background-color: var(--user-preview-bg);

  small {
    font-size: 10px;
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
`;

const UserImgName = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 5px;
`;

const UserName = styled.div`
  text-transform: capitalize;
`;

const MaskedImg = styled.img`
  border-radius: 50%;
  background-color: var(--masked-img-bg);
  width: 100px;
`;

export function UserCard({ id, name, image }: User): JSX.Element {
  return (
    <Container>
      <UserImgName>
        <MaskedImg data-testid="user-preview-img" src={image} alt={name} />
        <UserName>{name}</UserName>
      </UserImgName>
      <small>client: {id}</small>
    </Container>
  );
}
