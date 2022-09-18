import { InterpolationWithTheme } from "@emotion/core";
import { Theme } from "@emotion/react";

const formStyle: InterpolationWithTheme<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "max-content",
  rowGap: "16px",
  border: "1px solid lightgrey",
  borderRadius: "4px",
  padding: "16px",
};

const inputStyle: InterpolationWithTheme<Theme> = {
  padding: "4px",
  border: "1px solid lightgrey",
  borderRadius: "4px",
  width: "48px",
  textAlign: "center",
  marginLeft: "4px",
};

const controlButtonsStyle: InterpolationWithTheme<Theme> = {
  display: "flex",
  gap: "4px",
};

export { formStyle, inputStyle, controlButtonsStyle };
