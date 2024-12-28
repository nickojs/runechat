import Auth from "../components/auth";
import { AuthLayoutBase } from "./auth-layout.styles";

const AuthLayout = () => {
  return (
    <AuthLayoutBase>
      <Auth />
    </AuthLayoutBase>
  );
};

export default AuthLayout;
