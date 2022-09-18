import React from "react";
import { Navigate } from "react-router-dom";

function WithAuthRedirect<P extends object>(Component: React.ComponentType<P>) {
  return function myFunc(props: P) {
    const login = localStorage.getItem("login");
    if (!login) {
      return <Navigate replace to="/login" />;
    }
    return <Component {...props} />;
  };
}

WithAuthRedirect.displayName = "WithAuthRedirect";

export { WithAuthRedirect };
