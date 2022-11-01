import React from "react";
import { inputStyle } from "./style";

type CustomInputPropType = React.InputHTMLAttributes<HTMLInputElement> & { width: number };
const CustomInput = (props: CustomInputPropType) => {
  return <input css={Object.assign({}, inputStyle, { width: props.width })} {...props} />;
};

export { CustomInput };
