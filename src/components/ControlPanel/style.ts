import { InterpolationWithTheme } from "@emotion/core";

// https://markheath.net/post/customize-radio-button-css
const radioToolbarStyle: InterpolationWithTheme<any> = {
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

const formStyle: InterpolationWithTheme<any> = {
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  columnGap: "16px",
  rowGap: "16px",
  border: "1px solid lightgrey",
  borderRadius: "4px",
  padding: "16px",
};

const inputStyle: InterpolationWithTheme<any> = {
  padding: "4px",
  border: "1px solid lightgrey",
  borderRadius: "4px",
  width: "48px",
  textAlign: "right",
  marginLeft: "4px",
};

const controlButtonsStyle: InterpolationWithTheme<any> = {
  display: "flex",
  gap: "4px",
};

const fieldSizesStyle = {
  display: "inline-flex",
  gap: "8px",
};

export {
  radioToolbarStyle,
  formStyle,
  controlButtonsStyle,
  fieldSizesStyle,
  inputStyle
};