import React from "react";
import { Maybe, Nothing, User } from "../../types";
import { useAppSelector } from "../../app";
import { UserCard } from "../userCard";

function useGetUserFromStore(): Maybe<User> {
  //
  const status = useAppSelector((state) => state.auth.status);

  return status.kind === "LoggedIn" ? status.user : Nothing;
}

export function Main() {
  const user = useGetUserFromStore();

  if (user !== Nothing) {
    return <UserCard {...user} />;
  }

  return <>No user {JSON.stringify(user)}</>;
}
