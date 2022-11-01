import React  from "react";
import { Field } from "@/components/Field";
import { ControlPanel } from "@/components/ControlPanel";
import { Container } from "@/elements/Container";
import { Box } from "@/elements/Box";
import { WithAuthRedirect } from "@/common/withAuthRedirect";
import { Button } from "@/elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { authActions } from "@/components/SignInForm/redux";

const handleLogout = (dispatch: AppDispatch) => {
  localStorage.removeItem("login");
  dispatch(authActions.logout({}));
};

const Game = () => {
  const dispatch = useDispatch<AppDispatch>();
  const gameState = useSelector((state: RootState) => state.fieldReducer);
  const authState = useSelector((state: RootState) => state.authReducer);
  return (
    <>
      <Box position="absolute" alignContent="center" display="flex" gap="8px">
        <span>{authState.login}</span>
        <Button
          onClick={() => {
            handleLogout(dispatch);
          }}
        >
          Log out
        </Button>
      </Box>
      <Container>
        <Box display="grid" justifyItems="center" rowGap="50px">
          <ControlPanel
            fillingPercentage={gameState.fillingPercentage}
            width={gameState.width}
            height={gameState.height}
          />
          <Field fieldInfo={gameState.fieldInfo} />
        </Box>
      </Container>
    </>
  );
};

const GameForAuthorized = () => {
  const authState = useSelector((state: RootState) => state.authReducer);
  const isLoggedIn = Boolean(authState.login);
  return <WithAuthRedirect isLoggedIn={isLoggedIn}><Game /></WithAuthRedirect>;
};
export { GameForAuthorized, Game };
