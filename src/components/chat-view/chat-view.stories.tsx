import { Meta, StoryObj } from "@storybook/react";
import ChatView from ".";

const meta: Meta<typeof ChatView> = {
  title: "Components/Chat View",
  component: ChatView,
};

export default meta;

type Story = StoryObj<typeof ChatView>;

export const DefaultView: Story = {};
