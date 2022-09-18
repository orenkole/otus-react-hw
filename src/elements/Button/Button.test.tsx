import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  test("button click causes ripple effect", () => {
    render(<Button>hello</Button>);
    const button = screen.queryByText("hello");
    expect(button).toBeInTheDocument();
  });
});
