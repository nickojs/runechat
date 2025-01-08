import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

import { mockedAuthStore } from "../auth/auth.stories";
import ChatView from ".";

const store = mockedAuthStore({
  username: "zezima",
});

const meta: Meta<typeof ChatView> = {
  title: "Components/Chat View",
  component: ChatView,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ChatView>;

export const DefaultView: Story = {};
