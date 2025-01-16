import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";

import { SocketProvider } from "../context/socketContext";
import { mockedAuthStore } from "../auth/auth.stories";
import { ChatInput } from ".";

interface StorybookChatInputInterface {
  isConnected: boolean;
  onSend: (data: string) => void;
}

const store = mockedAuthStore({
  username: "zezima",
});

const meta: Meta<StorybookChatInputInterface> = {
  title: "Components/Chat Input",
  component: ChatInput,
  decorators: [
    (Story, context) => {
      const { isConnected } = context.args;

      return (
        <Provider store={store}>
          <SocketProvider
            values={{
              isConnected,
            }}
          >
            <Story />
          </SocketProvider>
        </Provider>
      );
    },
  ],
  args: {
    onSend: (data) => console.log(data),
  },
  argTypes: {
    isConnected: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<StorybookChatInputInterface>;

export const DefaultInput: Story = {
  args: {
    isConnected: true,
  },
};

export const DisabledInput: Story = {
  args: {
    isConnected: false,
  },
};
