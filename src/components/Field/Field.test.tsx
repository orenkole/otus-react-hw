import React from "react";
import { render, screen } from "@testing-library/react";
import {Field} from ".";

const dispatch = jest.fn();
const FieldStateMock = [
  [
    {
      "cellMode": 0,
      "x": 0,
      "y": 0,
      "id": "NHTlK10-Ia"
    },
    {
      "cellMode": 0,
      "x": 1,
      "y": 0,
      "id": "Y5EfingCBe"
    }
  ],
  [
    {
      "cellMode": 0,
      "x": 0,
      "y": 1,
      "id": "gvUGktH4nP"
    },
    {
      "cellMode": 0,
      "x": 1,
      "y": 1,
      "id": "RM9fXHVYn-"
    }
  ]
];

describe("Field", () => {
  test("renders Field component", () => {
    render(
      <Field
        fieldInfo={FieldStateMock}
        dispatch={dispatch}
      />
    );
    expect(screen.getAllByText(/\d+/)).toHaveLength(4);
  });
});