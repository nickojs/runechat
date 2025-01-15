import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";

import storageHelper from "../helpers/storage";
import { tokenSelector } from "../store/auth/auth.selectors";
import { AuthLayoutBase } from "./base.styles";

const AuthLayout = () => {
  let navigate = useNavigate();
  const localToken = storageHelper.auth.getToken();
  const token = useSelector(tokenSelector);

  useEffect(() => {
    if (token && localToken) {
      console.log(token);
      navigate("/main");
    }
  }, [token, localToken]);

  return (
    <AuthLayoutBase>
      <Outlet />
    </AuthLayoutBase>
  );
};

export default AuthLayout;
