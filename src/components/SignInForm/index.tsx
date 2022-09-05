import React from "react";
import {
  formStyle,
  inputStyle,
  controlButtonsStyle,
} from "./style";
import { Button } from "@/elements/Button";

const onSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault();
};


const SignInForm = () => {
  return (
    <form css={formStyle} onSubmit={onSubmit}>
      <label>
				Your login: 
        <input
          css={inputStyle}
          type="test"
          placeholder="login"
        />
      </label>
      <div css={controlButtonsStyle}>
        <Button type="button">Log in</Button>
        <Button type="button">Sign up</Button>
      </div>
    </form>
  );
};

export {SignInForm};