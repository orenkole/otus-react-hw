import React, { Dispatch } from "react";
import { Field } from "@/components/Field";
import { ControlPanel } from "@/components/ControlPanel";
import { ActionsType, AppStateType } from "@/common/types";
import { Container } from "@/elements/Container";
import { Box } from "@/elements/Box";
import { WithAuthRedirect } from "@/common/withAuthRedirect";
import { Button } from "@/elements/Button";

type GamePropsType = {
  dispatch: Dispatch<ActionsType>;
  state: AppStateType;
};

const handleLogout = (dispatch: Dispatch<ActionsType>) => {
  localStorage.removeItem("login");
  dispatch({ type: "LOGOUT" });
};

const Game = ({ dispatch, state }: GamePropsType) => {
  return (
    <>
      <Box position="absolute" alignContent="center" display="flex" gap="8px">
        <span>{state.login}</span>
        <Button
          onClick={() => {
            handleLogout(dispatch);
          }}
        >
          Выход
        </Button>
      </Box>
      <Container>
        <Box display="grid" justifyItems="center" rowGap="50px">
          <ControlPanel
            dispatch={dispatch}
            fillingPercentage={state.fillingPercentage}
            width={state.width}
            height={state.height}
          />
          <Field fieldInfo={state.fieldInfo} dispatch={dispatch} />
        </Box>
      </Container>
    </>
  );
};

const GameForAuthorized = WithAuthRedirect(Game);
export { GameForAuthorized, Game };
