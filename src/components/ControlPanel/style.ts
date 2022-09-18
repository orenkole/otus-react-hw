import { InterpolationWithTheme } from "@emotion/core";
import { Theme } from "@emotion/react";

// https://markheath.net/post/customize-radio-button-css
const radioToolbarStyle: InterpolationWithTheme<Theme> = {
  display: "inline-flex",
  gap: "4px",
  maxWidth: "fit-content",
  "& input[type=\"radio\"]": {
    opacity: 0,
    position: "fixed",
    width: 0,
  },
  "& label": {
    display: "inline-block",
    backgroundColor: "#fff",
    padding: "4px 8px",
    border: "1px solid #888",
    borderRadius: "4px",
    textAlign: "center",
    transition: "background-color 0.2s ease",
  },
  "& input[type=\"radio\"]:checked + label": {
    backgroundColor: "#ddf",
    borderColor: "#410859",
  },
  "& label:hover": {
    backgroundColor: "#eef",
  },
};

const formStyle: InterpolationWithTheme<Theme> = {
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  columnGap: "16px",
  rowGap: "16px",
  border: "1px solid lightgrey",
  borderRadius: "4px",
  padding: "16px",
};

const controlButtonsStyle: InterpolationWithTheme<Theme> = {
  display: "flex",
  gap: "4px",
};

const fieldSizesStyle = {
  display: "inline-flex",
  gap: "8px",
};

export { radioToolbarStyle, formStyle, controlButtonsStyle, fieldSizesStyle };
