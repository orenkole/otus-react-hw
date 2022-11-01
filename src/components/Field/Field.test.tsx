import React from "react";
import { screen } from "@testing-library/react";
import { Field } from ".";
import { renderWithProviders } from "@/utils/test-utils";
import { FieldInfoType } from "@/common/types";

const FieldStateMock: FieldInfoType = [
  [
    {
      cellMode: 0,
      x: 0,
      y: 0,
      id: "NHTlK10-Ia",
    },
    {
      cellMode: 0,
      x: 1,
      y: 0,
      id: "Y5EfingCBe",
    },
  ],
  [
    {
      cellMode: 0,
      x: 0,
      y: 1,
      id: "gvUGktH4nP",
    },
    {
      cellMode: 0,
      x: 1,
      y: 1,
      id: "RM9fXHVYn-",
    },
  ],
];

describe("Field", () => {
  test("renders Field component", () => {
    renderWithProviders(<Field fieldInfo={FieldStateMock} />);
    expect(screen.getAllByText(/\d+/)).toHaveLength(4);
  });
});
