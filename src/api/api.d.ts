export interface AuthLoginResponse {
  message: string;
  user: {
    id: string;
    authToken: string;
  };
}
