import { Meta, StoryObj } from "@storybook/react";
import Message from ".";

const longMessage =
  "Lorem ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim ipsum dolor atchim";

const meta: Meta<typeof Message> = {
  title: "Components/Message",
  component: Message,
  parameters: {
    layout: "centered",
  },
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
export const SystemMessage: Story = {
  args: {
    username: "system",
    message: "username has joined the room",
    origin: "system",
  },
  argTypes: {
    origin: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#000000",
          width: "100vh",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 50%)",
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};
