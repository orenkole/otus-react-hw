import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { fieldReducer } from "@/components/ControlPanel/redux";
import { authReducer } from "@/components/SignInForm/redux";

export const reducers = {
  authReducer,
  fieldReducer,
};

export const rootReducer = combineReducers({ ...reducers });

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
