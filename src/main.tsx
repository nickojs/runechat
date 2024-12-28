import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router";
import { theme } from "./config/theme.tsx";
import Auth from "./components/auth/index.tsx";
import AuthLayout from "./layouts/auth-layout.tsx";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
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
  </StrictMode>
);
