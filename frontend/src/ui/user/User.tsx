import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserCard } from "../../types";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: var(--user-preview-bg);
  border-radius: 50px 0 0 50px;
  padding: 5px;
`;

const MaskedImg = styled.img`
  border-radius: 50%;
  background-color: var(--masked-img-bg);
`;

export default function User({
  id,
  firstName,
  lastName,
  image,
}: UserCard): JSX.Element {
  return (
    <Container>
      <MaskedImg data-testid="user-preview-img" src={image} alt={firstName} />
      <Link data-testid="navigate-to-usercard" to={`users/${id}`}>
        {`${firstName} ${lastName}`}
      </Link>
    </Container>
  );
}
