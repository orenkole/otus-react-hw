type LoginPayload = {
  login: string;
};

import { authInitialState } from "@/redux/state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.login = action.payload.login;
    },
    logout: (state) => {
      state.login = "";
    },
  },
});

export { reducer as authReducer, actions as authActions };
