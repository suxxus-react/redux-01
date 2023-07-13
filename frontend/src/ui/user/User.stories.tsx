import type { Meta, StoryObj } from "@storybook/react";
import User from "./User";

const user: Meta<typeof User> = {
  title: "Components/User",
  component: User,
};

export default user;

type Story = StoryObj<typeof User>;

export const Basic: Story = {
  args: {
    id: 11,
    firstName: "John",
    lastName: "Doe",
    image: "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
  },
};
