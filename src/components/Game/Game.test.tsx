import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Game} from ".";
import {initialStateMock} from "@/mocks/initialStateMock";
import {GameReducer, LOGOUT} from "@/components/Game/redux";

const dispatch = jest.fn();
describe("Game", () => {
  test("click on cell changes state", () => {
    render(<Game dispatch={dispatch} state={initialStateMock} />);
    const cell = screen.queryAllByText("0")[0];
    if (cell) {
      userEvent.click(cell);
    }
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});

describe("Game reducer", () => {
  test("Logout should return state with empty", () => {
    expect(GameReducer(initialStateMock, {
      type: LOGOUT,
    })).toEqual({...initialStateMock, login: ""});
  });
});
