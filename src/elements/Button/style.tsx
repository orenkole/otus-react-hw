import { InterpolationWithTheme } from "@emotion/core";
import { keyframes, Theme } from "@emotion/react";

const ripple = keyframes`
	0% {
		opacity: 0;
	}
	25% {
		opacity: 1;
	}
	100% {
		width: 400%;
		padding-bottom: 400%;
		opacity: 0;
	}
`;

const ButtonStyle: InterpolationWithTheme<Theme> = {
  fontSize: "14px",
  backgroundColor: "#fff",
  display: "inline-block",
  color: "black",
  padding: "4px 8px",
  border: "1px solid #888",
  borderRadius: "4px",
  textAlign: "center",
  position: "relative",
  overflow: "visible",
  userSelect: "none",
  transition: "background-color 0.2s ease",
  "&:hover": {
    outline: 0,
    textDecoration: "none",
    backgroundColor: "#eef",
  },
  "&:not(:disabled)": {
    cursor: "pointer",
  },
  "& .ripple": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: "transparent",
  },
  "& .ripple-circle": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0,
    width: 0,
    height: 0,
    borderRadius: "50%",
    background: "rgba(0, 0, 255, 0.25)",
  },
  "& .ripple.active .ripple-circle": {
    animation: `${ripple} 0.4s ease-in`,
  },
};

export { ButtonStyle };
