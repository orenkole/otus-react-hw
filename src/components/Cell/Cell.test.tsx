import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { Cell } from ".";
import { renderWithProviders } from "@/utils/test-utils";
import userEvent from "@testing-library/user-event";

describe("Cell rendering", () => {
  test("renders Cell component", async () => {
    renderWithProviders(
      <Cell
        cellInfo={{
          cellMode: 1,
          x: 2,
          y: 2,
          id: "1",
        }}
      />,
    );
    const cell = screen.getByText("1");
    expect(cell).toBeInTheDocument();
  });

  test("ripple effect", async () => {
    renderWithProviders(
      <Cell
        cellInfo={{
          cellMode: 1,
          x: 2,
          y: 2,
          id: "1",
        }}
      />,
    );
    const cell = screen.getByText("1");
    const ripple = screen.getByTestId("ripple");
    await userEvent.click(cell);
    await waitFor(() => expect(ripple).toHaveClass("active"));
    await waitFor(() => expect(ripple).not.toHaveClass("active"));
  });
});
