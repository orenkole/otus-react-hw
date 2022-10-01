import { State } from "@/redux/state";

export const LOGIN = "components/SignInForm/LOGIN";

type LoginPayload = {
  login: string;
};

type LoginAction = {
  type: typeof LOGIN;
  payload: LoginPayload;
};

export const loginAC = (payload: LoginPayload): LoginAction => ({
  type: LOGIN,
  payload,
});

type LoginActionType = LoginAction;

export const signInFormReducer = (
  state: State,
  action: LoginActionType
): State => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      login: action.payload.login,
    };
  default:
    return state;
  }
};
