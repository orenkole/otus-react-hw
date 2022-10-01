import { State } from "@/redux/state";

export const LOGOUT = "components/SignInForm/LOGOUT";

type LogoutAction = {
  type: typeof LOGOUT;
};

export const logoutAC = (): LogoutAction => ({
  type: LOGOUT,
});

type LoginActionType = LogoutAction;

export const GameReducer = (state: State, action: LoginActionType): State => {
  switch (action.type) {
  case LOGOUT:
    return {
      ...state,
      login: "",
    };
  default:
    return state;
  }
};
