export interface AuthLoginResponse {
  message: string;
  user: {
    id: string;
    authToken: string;
    username: string;
  };
}
export interface CreateAccResponse {
  message: string;
}

export interface DefaultErrorResponse {
  message: string;
  statusCode: number;
}
