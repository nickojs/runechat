import { useLocation } from "react-router";
import {
  AuthContainer,
  ButtonsContainer,
  RuneButton,
  RuneNavButton,
  Title,
} from "./auth.styles";

const Auth = () => {
  let location = useLocation();
  const isLoginForm = location.pathname.includes("login");
  const isSignupForm = location.pathname.includes("create-account");
  const isInitialPage = !isLoginForm && !isSignupForm;

  return (
    <AuthContainer>
      {isInitialPage && <Title>Welcome to RuneChat</Title>}
      <ButtonsContainer>
        {isInitialPage && (
          <>
            <RuneNavButton to={"/create-account"}>New User</RuneNavButton>
            <RuneNavButton to="/login">Existing User</RuneNavButton>
          </>
        )}
        {isLoginForm && (
          <>
            <RuneButton onClick={() => console.log("login")}>Login</RuneButton>
            <RuneNavButton to="/">Cancel</RuneNavButton>
          </>
        )}
        {isSignupForm && (
          <>
            <RuneButton onClick={() => console.log("login")}>
              Create Account
            </RuneButton>
            <RuneNavButton to="/">Cancel</RuneNavButton>
          </>
        )}
      </ButtonsContainer>
    </AuthContainer>
  );
};

export default Auth;
