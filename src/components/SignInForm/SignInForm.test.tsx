import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SignInForm } from ".";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appStyles } from "@/App/style";
import { state } from "@/mocks/state";
import userEvent from "@testing-library/user-event";

const dispatch = jest.fn();

describe("Sign in form rendering", () => {
  test("renders SignInForm component", () => {
    render(
      <BrowserRouter>
        <div css={appStyles}>
          <Routes>
            <Route path="/" element={<SignInForm dispatch={dispatch} state={state} />} />
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
            <Route path="/" element={<SignInForm dispatch={dispatch} state={state} />} />
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
