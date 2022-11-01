import React from "react";
import { initialFieldMock } from "@/mocks/initialFieldMock";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { cloneObj } from "@/utils/helperFunctions";
import { authActions, authReducer } from "@/components/SignInForm/redux";
import { renderWithProviders } from "@/utils/test-utils";
import { Game } from "@/components/Game/index";

describe("Game", () => {
  test("Logout should return state with empty", () => {
    const newState = cloneObj({ ...initialFieldMock, login: "hello" });
    expect(authReducer(newState, authActions.logout({}))).toEqual({ ...newState, login: "" });
  });
  test("Update filling percentage", async () => {
    renderWithProviders(<Game />);
    const fillingPercentageInput = await screen.findByPlaceholderText("Filling percentage");
    if (fillingPercentageInput) {
      userEvent.type(fillingPercentageInput, "12");
      const cells = await screen.findAllByTestId("cellMode-1");
      expect(cells).toHaveLength(3);
    }
  });
  test("Update width", async () => {
    renderWithProviders(<Game />);
    const widthInput = screen.getByLabelText("Field width:");
    expect(widthInput).toBeInTheDocument();
    if (widthInput) {
      userEvent.clear(widthInput);
      userEvent.type(widthInput, "6");
    }
    const singleRowCells = screen.getAllByTestId(/row-0_column-\d+/);
    expect(singleRowCells).toHaveLength(6);
  });
  test("Update height", async () => {
    renderWithProviders(<Game />);
    const heightInput = screen.getByLabelText("Field height:");
    expect(heightInput).toBeInTheDocument();
    if (heightInput) {
      userEvent.clear(heightInput);
      userEvent.type(heightInput, "6");
    }
    const singleColumnCells = screen.getAllByTestId(/row-\d+_column-0/);
    expect(singleColumnCells).toHaveLength(6);
  });
  test("Reset", async () => {
    renderWithProviders(<Game />);
    const widthInput = screen.getByLabelText("Field width:");
    const heightInput = screen.getByLabelText("Field height:");
    const fillingPercentageInput = screen.getByLabelText("Filling percentage:");
    if (widthInput && heightInput) {
      userEvent.clear(widthInput);
      userEvent.type(widthInput, "6");
      userEvent.clear(heightInput);
      userEvent.type(heightInput, "9");
      userEvent.clear(fillingPercentageInput);
      userEvent.type(fillingPercentageInput, "12");
    }
    let singleRowCells = screen.getAllByTestId(/row-0_column-\d+/);
    let singleColumnCells = screen.getAllByTestId(/row-\d+_column-0/);
    expect(singleRowCells).toHaveLength(6);
    expect(singleColumnCells).toHaveLength(9);
    let filledCells = screen.getAllByTestId("cellMode-1");
    expect(filledCells).toHaveLength(7);
    const resetButton = screen.getByText("Reset");
    userEvent.click(resetButton);
    singleRowCells = screen.getAllByTestId(/row-0_column-\d+/);
    singleColumnCells = screen.getAllByTestId(/row-\d+_column-0/);
    filledCells = screen.queryAllByTestId("cellMode-1");
    expect(singleRowCells).toHaveLength(5);
    expect(singleColumnCells).toHaveLength(5);
    expect(filledCells).toHaveLength(0);
  });
});
