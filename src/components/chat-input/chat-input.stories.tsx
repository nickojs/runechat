import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";

import { mockedAuthStore } from "../auth/auth.stories";
import ChatInput from ".";

const store = mockedAuthStore({
  username: "zezima",
});

const meta: Meta<typeof ChatInput> = {
  title: "Components/Chat Input",
  component: ChatInput,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ChatInput>;

export const DefaultView: Story = {};
