import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import storageHelper from "../helpers/storage";
import { tokenSelector } from "../store/auth/auth.selectors";

export const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props) => {
    const navigate = useNavigate();
    const authToken = useSelector(tokenSelector);
    const localToken = storageHelper.auth.getToken();

    useEffect(() => {
      if (!authToken || !localToken) navigate("/");
    }, []);

    return <WrappedComponent {...props} />;
  };
};
