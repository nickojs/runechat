import axiosInstance from ".";
import { LoginData } from "../components/auth/login";
import { AuthLoginResponse, CreateAccResponse } from "./api";

// auth
export const login = async (body: LoginData): Promise<AuthLoginResponse> => {
  const response = await axiosInstance.post<AuthLoginResponse>(
    "/auth/login",
    body
  );

  return response.data;
};

export const createAcc = async (
  body: LoginData
): Promise<CreateAccResponse> => {
  const response = await axiosInstance.post<CreateAccResponse>("/users/", body);

  return response.data;
};
