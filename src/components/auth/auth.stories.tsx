import { Meta, StoryObj } from "@storybook/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

import {
  initialState as authInitialState,
  AuthState,
} from "../../store/auth/auth.slice";
import { reducers, store } from "../../store";
import Auth from ".";

export const mockedAuthStore = (params: Partial<AuthState>) =>
  configureStore({
    reducer: reducers,
    preloadedState: {
      authReducer: {
        ...authInitialState,
        ...params,
      },
    },
  });

export default {
  component: Auth,
  title: "Components/Auth",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login", "/create-account"]}>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
  excludeStories: ["mockedAuthStore"],
} as Meta;

type Story = StoryObj<typeof Auth>;

export const LoginScreenDefault: Story = {};
