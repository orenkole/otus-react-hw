import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SignInForm } from ".";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appStyles } from "@/App/style";
import { initialStateMock } from "@/mocks/initialStateMock";
import userEvent from "@testing-library/user-event";
import {signInFormReducer, LOGIN} from "@/components/SignInForm/redux";

const dispatch = jest.fn();

describe("Sign in form rendering", () => {
  test("renders SignInForm component", () => {
    render(
      <BrowserRouter>
        <div css={appStyles}>
          <Routes>
            <Route path="/" element={<SignInForm dispatch={dispatch} state={initialStateMock} />} />
          </Routes>
        </div>
      </BrowserRouter>,
    );
    expect(screen.getByText("Your login:")).toBeInTheDocument();
    expect(screen.getByText("Log in")).toBeInTheDocument();
    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });

  test("on submit SignInForm component", () => {
    const dispatch = jest.fn();

    render(
      <BrowserRouter>
        <div css={appStyles}>
          <Routes>
            <Route path="/" element={<SignInForm dispatch={dispatch} state={initialStateMock} />} />
          </Routes>
        </div>
      </BrowserRouter>,
    );
    const loginInput = screen.getByPlaceholderText("login");
    fireEvent.change(loginInput, { target: { value: "Oleh" } });
    const submitButton = screen.queryAllByText("Log in")[0];
    if (submitButton) {
      userEvent.click(submitButton);
      expect(dispatch).toHaveBeenCalledWith({ type: "LOGIN", payload: "Oleh" });
    }
  });
});

describe("Sign in form redux", () => {
  test("Login action should return state with login info", () => {
    expect(signInFormReducer(initialStateMock, {
      type: LOGIN,
      payload: { login: "Oleh" }
    })).toEqual({...initialStateMock, login: "Oleh"});
  });
});
