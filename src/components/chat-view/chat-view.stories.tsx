import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router";

import { reducers } from "../../store";
import { mockedMessages } from "../../assets/message-mocks";
import ChatView from ".";
import { initialState } from "../../store/auth/auth.slice";

export const mockedMessagesStore = () =>
  configureStore({
    reducer: reducers,
    preloadedState: {
      messagesReducer: {
        messages: mockedMessages,
      },
      authReducer: {
        ...initialState,
        username: "zezima",
      },
    },
  });

const store = mockedMessagesStore();

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
  excludeStories: ["mockedMessagesStore"],
};

export default meta;

type Story = StoryObj<typeof ChatView>;

export const DefaultView: Story = {};
