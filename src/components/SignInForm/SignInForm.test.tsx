import React from "react";
import { render, screen } from "@testing-library/react";
import {SignInForm} from ".";

describe("Sign in form rendering", () => {
  test("renders ControlPanel component", () => {
    render(
      <SignInForm />
    );
    expect(screen.getByText("Your login:")).toBeInTheDocument();
    expect(screen.getByText("Log in")).toBeInTheDocument();
    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });
});