import React, { useReducer } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { AppStateType } from "@/common/types";
import { reducer } from "@/common/reducer";
import { setInitialFieldInfo } from "@/common/helperFunctions";
import { appStyles } from "./style";
import { GameForAuthorized } from "@/components/Game";
import { SignInForm } from "@/components/SignInForm";

const initialFieldParams = { width: 5, height: 5, fillingPercentage: 0 };
// test format
/* istanbul ignore next */
export const initialState: AppStateType = {
  fieldInfo: setInitialFieldInfo({
    width: initialFieldParams.width,
    height: initialFieldParams.height,
    fillingPercentage: initialFieldParams.fillingPercentage,
  }),
  fillingPercentage: initialFieldParams.fillingPercentage,
  width: initialFieldParams.width,
  height: initialFieldParams.height,
  login: localStorage.getItem("login") || "",
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <div css={appStyles}>
        <Routes>
          <Route path="/login" element={<SignInForm dispatch={dispatch} state={state} />} />
          <Route path="/" element={<GameForAuthorized dispatch={dispatch} state={state} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export { App };
