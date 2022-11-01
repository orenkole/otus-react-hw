import React  from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { appStyles } from "./style";
import { GameForAuthorized } from "@/components/Game";
import { SignInForm } from "@/components/SignInForm";
import { setupStore } from "@/redux/store";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={setupStore()}>
        <div css={appStyles}>
          <Routes>
            <Route path="/login" element={<SignInForm />} />
            <Route path="/" element={<GameForAuthorized />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export { App };
