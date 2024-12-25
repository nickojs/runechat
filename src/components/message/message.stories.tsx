import { Meta, StoryObj } from "@storybook/react";
import Message from ".";

const longMessage =
  "Lorem ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim";

const meta: Meta<typeof Message> = {
  title: "Components/Message",
  component: Message,
};

export default meta;

type Story = StoryObj<typeof Message>;

export const ShortMessage: Story = {
  args: {
    username: "ShortMessage",
    message: longMessage.substring(0, 60),
    origin: "sender",
  },
};
export const LongMessage: Story = {
  args: {
    username: "LongMessage",
    message: longMessage,
    origin: "sender",
  },
};
