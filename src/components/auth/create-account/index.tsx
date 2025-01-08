import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  ErrorContainer,
  FormInput,
  FormInputContainer,
  FormLabel,
  ButtonsContainer,
  RuneButton,
} from "../auth.styles";
import { isAuthLoadingSelector } from "../../../store/auth/auth.selectors";
import { createAccRoutine } from "../../../store/auth/auth.saga";

const CreateAccountForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();
  const isLoading = useSelector(isAuthLoadingSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const password = watch("password");

  const onSubmit = (data: any) => {
    dispatch(createAccRoutine.trigger(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ErrorContainer>
          {errors.confirmPassword && (
            <span role="alert">{errors.confirmPassword.message as string}</span>
          )}
          <br />
          {errors.password && (
            <>
              {errors.password && (
                <span role="alert">
                  password should have at least six (6) chars
                </span>
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
            placeholder="create a username"
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

        <FormInputContainer>
          <FormLabel>confirm password: </FormLabel>
          <FormInput
            type="password"
            placeholder="confirm password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
        </FormInputContainer>
        <ButtonsContainer>
          <RuneButton type="submit" disabled={!isValid}>
            Create Account
          </RuneButton>
          <RuneButton disabled={isLoading} onClick={() => navigate("/")}>
            Cancel
          </RuneButton>
        </ButtonsContainer>
      </form>
    </>
  );
};

export default CreateAccountForm;
