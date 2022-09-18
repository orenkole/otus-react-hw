import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Game } from ".";
import { state } from "@/mocks/state";

const dispatch = jest.fn();
describe("Game", () => {
  test("click on cell changes state", () => {
    render(<Game dispatch={dispatch} state={state} />);
    const cell = screen.queryAllByText("0")[0];
    if (cell) {
      userEvent.click(cell);
    }
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
