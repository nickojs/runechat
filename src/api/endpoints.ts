import axiosInstance from ".";
import { LoginData } from "../components/auth/login";
import { AuthLoginResponse } from "./api";

// auth
export const login = async (body: LoginData): Promise<AuthLoginResponse> => {
  const response = await axiosInstance.post<AuthLoginResponse>(
    "/auth/login",
    body
  );

  return response.data;
};
