import {
  AuthContainer,
  ButtonsContainer,
  RuneInput,
  Title,
} from "./auth.styles";

type FormType = "login" | "create";

const Auth = () => {
  return (
    <AuthContainer>
      <Title>Welcome to RuneChat</Title>
      <ButtonsContainer>
        <RuneInput>New User</RuneInput>
        <RuneInput>Existing User</RuneInput>
      </ButtonsContainer>
    </AuthContainer>
  );
};

export default Auth;
