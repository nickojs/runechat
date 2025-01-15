import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import Auth from "./components/auth/index.tsx";
import AuthLayout from "./layouts/auth-layout.tsx";
import ChatLayout from "./layouts/chat-layout.tsx";
import { SocketProvider } from "./components/context/socketContext.tsx";

import ChatView from "./components/chat-view/index.tsx";

import { theme } from "./config/theme.tsx";
import { store } from "./store/";

import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer hideProgressBar position="top-center" autoClose={5000} />
      <ThemeProvider theme={theme}>
        <SocketProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AuthLayout />}>
                <Route path="/" element={<Auth />} />
                <Route path="login" element={<Auth />} />
                <Route path="create-account" element={<Auth />} />
              </Route>
              <Route element={<ChatLayout />}>
                <Route path="/main" element={<ChatView />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SocketProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
