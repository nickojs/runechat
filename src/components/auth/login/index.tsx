import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  ErrorContainer,
  FormInput,
  FormInputContainer,
  FormLabel,
  ButtonsContainer,
  RuneButton,
} from "../auth.styles";
import { loginRoutine } from "../../../store/auth/auth.saga";
import { isAuthLoadingSelector } from "../../../store/auth/auth.selectors";

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
  const navigate = useNavigate();

  const isLoading = useSelector(isAuthLoadingSelector);

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
          <RuneButton type="submit" disabled={!isValid || isLoading}>
            Login
          </RuneButton>
          <RuneButton disabled={isLoading} onClick={() => navigate("/")}>
            Cancel
          </RuneButton>
        </ButtonsContainer>
      </form>
    </>
  );
};

export default LoginForm;
