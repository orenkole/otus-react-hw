import { InterpolationWithTheme } from "@emotion/core";
import { Theme } from "@emotion/react";

const inputStyle: InterpolationWithTheme<Theme> = {
  padding: "4px",
  border: "1px solid lightgrey",
  borderRadius: "4px",
  width: "48px",
  textAlign: "right",
  marginLeft: "4px",
};

export { inputStyle };
