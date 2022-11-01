import React from "react";
import { screen } from "@testing-library/react";

import { renderWithProviders } from "@/utils/test-utils";
import { WithAuthRedirect } from "@/common/withAuthRedirect";

describe("withAuthRedirect", () => {
  test("renders component when logged in", () => {
    renderWithProviders(
      <WithAuthRedirect isLoggedIn={true}>
        <div>hello</div>
      </WithAuthRedirect>
    );
    const loginText = screen.getByText("hello");
    expect(loginText).toBeInTheDocument();
  });
});
