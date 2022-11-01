import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from ".";
import userEvent from "@testing-library/user-event";

describe("Cell rendering", () => {
  test("renders Cell component", () => {
    render(
      <App />,
    );
    expect(screen.getByText("Your login:")).toBeInTheDocument();
  });
  test("Handle logout", () => {
    render(<App />);
    const loginInput = screen.getByLabelText("Your login:");
    userEvent.type(loginInput,"qwerty");
    const loginBtn = screen.getByText("Log in");
    if (loginBtn) {
      userEvent.click(loginBtn);
    }
    const logOutBtn = screen.getByText("Log out");
    expect(logOutBtn).toBeInTheDocument();
    userEvent.click(logOutBtn);
    expect(logOutBtn).not.toBeInTheDocument();
  });
});
