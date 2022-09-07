import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cell } from ".";

const dispatch = jest.fn();

describe("Cell rendering", () => {
  test("renders Cell component", () => {
    render(
      <Cell
        cellInfo={{
          cellMode: 1,
          x: 2,
          y: 2,
          id: "1",
        }}
        dispatch={dispatch}
      />,
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("Fires event on cell click", () => {
    render(
      <Cell
        cellInfo={{
          cellMode: 1,
          x: 2,
          y: 2,
          id: "1",
        }}
        dispatch={dispatch}
      />,
    );
    const cell = screen.queryByText("1");
    if (cell) {
      userEvent.click(cell);
      expect(dispatch).toHaveBeenCalledTimes(1);
    }
  });
});
