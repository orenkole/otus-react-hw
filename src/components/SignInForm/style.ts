import { InterpolationWithTheme } from "@emotion/core";

const formStyle: InterpolationWithTheme<any> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "max-content",
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
  textAlign: "center",
  marginLeft: "4px",
};

const controlButtonsStyle: InterpolationWithTheme<any> = {
  display: "flex",
  gap: "4px",
};

export {
  formStyle,
  inputStyle,
  controlButtonsStyle,
};