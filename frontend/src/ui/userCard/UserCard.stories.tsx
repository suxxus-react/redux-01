import type { Meta, StoryObj } from "@storybook/react";
import { UserCard } from "./";
import { loggedUser } from "../../mocks";

const userCard: Meta<typeof UserCard> = {
  title: "Components/UserCard",
  component: UserCard,
};

export default userCard;

type Story = StoryObj<typeof UserCard>;

export const Basic: Story = {
  args: {
    ...loggedUser,
  },
};
