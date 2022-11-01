import React  from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formStyle, controlButtonsStyle } from "./style";
import { Button } from "@/elements/Button";
import { Container } from "@/elements/Container";
import { Box } from "@/elements/Box";
import { CustomInput } from "@/elements/CustomInput/CustomInput.index";
import { formSubmitHandler } from "@/common/types";
import { AppDispatch } from "@/redux/store";
import { authActions } from "@/components/SignInForm/redux";

const SignInForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit: formSubmitHandler = ({ ev, dispatch }) => {
    ev.preventDefault();
    const formElement = ev.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const login = formData.get("login");
    if (typeof login === "string" && login.length > 0) {
      dispatch(authActions.login({ login }));
      localStorage.setItem("login", login);
      navigate("/", { replace: true });
    }
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <form
          css={formStyle}
          onSubmit={(ev) => {
            onSubmit({ ev, dispatch });
          }}
        >
          <label>
            Your login:
            <CustomInput type="test" placeholder="login" width="100px" name="login" />
          </label>
          <div css={controlButtonsStyle}>
            <Button type="submit">Log in</Button>
            <Button type="button">Sign up</Button>
          </div>
        </form>
      </Box>
    </Container>
  );
};

export { SignInForm };
