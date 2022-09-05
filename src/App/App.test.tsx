import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from ".";

describe("App", () => {
  test("click on cell changes state", () => {
    render(
      <App />
    );
    const cell = screen.queryAllByText("0")[0];
    if(cell) {
      userEvent.click(cell);
    }
    expect(cell).toHaveTextContent("1");
  });
});
