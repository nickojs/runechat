import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  ErrorContainer,
  FormInput,
  FormInputContainer,
  FormLabel,
  ButtonsContainer,
  RuneButton,
  RuneNavButton,
} from "../auth.styles";
import { loginRoutine } from "../../../store/auth/auth.saga";

export interface LoginData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginData>();

  const dispatch = useDispatch();

  const onSubmit = (data: LoginData) => {
    dispatch(loginRoutine.trigger(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ErrorContainer>
          {errors.password && (
            <>
              {errors.password && (
                <span role="alert">password is required</span>
              )}
            </>
          )}
          <br />
          {errors.username && <span role="alert">username is required</span>}
        </ErrorContainer>
        <FormInputContainer>
          <FormLabel>username: </FormLabel>
          <FormInput
            type="text"
            placeholder="username"
            {...register("username", {
              required: true,
              maxLength: 16,
            })}
          />
        </FormInputContainer>

        <FormInputContainer>
          <FormLabel>password: </FormLabel>
          <FormInput
            type="password"
            placeholder="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 60,
            })}
          />
        </FormInputContainer>

        <ButtonsContainer>
          <RuneButton type="submit" disabled={!isValid}>
            Login
          </RuneButton>
          <RuneNavButton to="/">Cancel</RuneNavButton>
        </ButtonsContainer>
      </form>
    </>
  );
};

export default LoginForm;
