import React  from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  isLoggedIn: boolean;
}

const WithAuthRedirect = (props: Props) => {
  if (props.isLoggedIn) {
    return <>{props.children}</>;
  }
  return <Navigate replace to="/login" />;
};

WithAuthRedirect.displayName = "WithAuthRedirect";

export { WithAuthRedirect };
