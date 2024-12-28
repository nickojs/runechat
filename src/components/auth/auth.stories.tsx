import { Meta, StoryObj } from "@storybook/react";

import Auth from ".";
import { MemoryRouter } from "react-router";

export default {
  component: Auth,
  title: "Components/Auth",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/login", "/create-account"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Auth>;

export const LoginScreenDefault: Story = {};
