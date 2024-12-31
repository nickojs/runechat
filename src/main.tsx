import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import Auth from "./components/auth/index.tsx";
import AuthLayout from "./layouts/auth-layout.tsx";
import { theme } from "./config/theme.tsx";
import { store } from "./store/";

import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route path="login" element={<Auth />} />
              <Route path="create-account" element={<Auth />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
