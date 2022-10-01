import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cell } from ".";
import {CELL_CLICK, cellClickReducer} from "@/components/Cell/redux";
import {initialStateMock} from "@/mocks/initialStateMock";
import {cloneObj} from "@/utils/helperFunctions";

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

describe("Cell reducer", () => {
  test("Cell should change it's state on click", () => {
    const newState = cloneObj(initialStateMock);
    newState.fieldInfo[0][1].cellMode = 1;
    expect(cellClickReducer(initialStateMock, {
      type: CELL_CLICK,
      payload: { id: "5LMc1bZvGS" }
    })).toEqual(newState);
  });
});
