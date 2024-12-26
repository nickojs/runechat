import { Meta, StoryObj } from "@storybook/react";
import ChatInput from ".";

const meta: Meta<typeof ChatInput> = {
  title: "Components/Chat Input",
  component: ChatInput,
};

export default meta;

type Story = StoryObj<typeof ChatInput>;

export const DefaultView: Story = {};
