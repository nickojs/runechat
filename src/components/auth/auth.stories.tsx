import { Meta, StoryObj } from "@storybook/react";
import Auth from ".";

export default {
  component: Auth,
  title: "Containers/Auth",
  parameters: {
    layout: "centered",
  },
} as Meta;

type Story = StoryObj<typeof Auth>;

export const LoginScreenDefault: Story = {};
