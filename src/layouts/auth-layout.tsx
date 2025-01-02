import { Outlet } from "react-router";
import { AuthLayoutBase } from "./base.styles";

const AuthLayout = () => {
  return (
    <AuthLayoutBase>
      <Outlet />
    </AuthLayoutBase>
  );
};

export default AuthLayout;
