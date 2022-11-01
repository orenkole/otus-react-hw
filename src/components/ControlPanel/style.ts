import { css } from "@emotion/react";

const radioToolbarStyle = css({
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
});

const formStyle = css({
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  columnGap: "16px",
  rowGap: "16px",
  border: "1px solid lightgrey",
  borderRadius: "4px",
  padding: "16px",
});

const controlButtonsStyle = css({
  display: "flex",
  gap: "4px",
});

const fieldSizesStyle = css({
  display: "inline-flex",
  gap: "8px",
});

export { radioToolbarStyle, formStyle, controlButtonsStyle, fieldSizesStyle };
