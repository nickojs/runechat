import { useForm } from "react-hook-form";
import {
  ErrorContainer,
  FormInput,
  FormInputContainer,
  FormLabel,
  ButtonsContainer,
  RuneButton,
  RuneNavButton,
} from "../auth.styles";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

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
