import React from "react";
import { screen } from "@testing-library/react";
import { SignInForm } from ".";
import { Route, Routes } from "react-router-dom";
import { appStyles } from "@/App/style";
import { AuthStateMock } from "@/mocks/initialFieldMock";
import { authActions, authReducer } from "@/components/SignInForm/redux";
import { renderWithProviders } from "@/utils/test-utils";

describe("Sign in form rendering", () => {
  test("renders SignInForm component", () => {
    renderWithProviders(
      <div css={appStyles}>
        <Routes>
          <Route path="/" element={<SignInForm />} />
        </Routes>
      </div>,
    );
    expect(screen.getByText("Your login:")).toBeInTheDocument();
    expect(screen.getByText("Log in")).toBeInTheDocument();
    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });

  test("Call onSubmit", () => {
    renderWithProviders(
      <div css={appStyles}>
        <Routes>
          <Route path="/" element={<SignInForm />} />
        </Routes>
      </div>,
    );
  });
});

describe("Sign in form redux", () => {
  test("Login action should return state with login info", () => {
    expect(authReducer(AuthStateMock, authActions.login({ login: "Oleh" })))
      .toEqual({ ...AuthStateMock, login: "Oleh" });
  });
});
