import { useLocation } from "react-router";
import {
  AuthContainer,
  ButtonsContainer,
  RuneNavButton,
  Title,
} from "./auth.styles";
import CreateAccountForm from "./create-account";
import LoginForm from "./login";

const Auth = () => {
  let location = useLocation();
  const isLoginForm = location.pathname.includes("login");
  const isSignupForm = location.pathname.includes("create-account");
  const isInitialPage = !isLoginForm && !isSignupForm;

  return (
    <AuthContainer>
      {isInitialPage && <Title>Welcome to RuneChat</Title>}
      {isSignupForm && <CreateAccountForm />}
      {isLoginForm && <LoginForm />}
      {isInitialPage && (
        <ButtonsContainer>
          <>
            <RuneNavButton to={"/create-account"}>New User</RuneNavButton>
            <RuneNavButton to="/login">Existing User</RuneNavButton>
          </>
        </ButtonsContainer>
      )}
    </AuthContainer>
  );
};

export default Auth;
