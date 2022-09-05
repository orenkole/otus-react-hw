import React, {useReducer} from "react";
import { Field } from "@/components/Field";
import { ControlPanel } from "@/components/ControlPanel";
import {
  AppStateType,
} from "@/common/types";
import { reducer } from "@/common/reducer";
import { setInitialFieldInfo } from "@/common/helperFunctions";
import { Container } from "@/elements/Container";
import { Box } from "@/elements/Box";
import { appStyles } from "./style";
import { SignInForm } from "@/components/SignInForm";

const initialFieldParams = {width: 5, height: 5, fillingPercentage: 0};

export const initialState: AppStateType = {
  fieldInfo: setInitialFieldInfo({
    width: initialFieldParams.width,
    height: initialFieldParams.height,
    fillingPercentage: initialFieldParams.fillingPercentage
  }),
  fillingPercentage: initialFieldParams.fillingPercentage,
  width: initialFieldParams.width,
  height: initialFieldParams.height
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div css={appStyles}>
      <Container>
        <Box
          display="grid"
          justifyItems="center"
          rowGap="50px"
        >
          <SignInForm />
          <ControlPanel 
            dispatch={dispatch}
            fillingPercentage={state.fillingPercentage}
            width={state.width}
            height={state.height}
          />
          <Field
            fieldInfo={state.fieldInfo}
            dispatch={dispatch}
          />
        </Box>
      </Container>
    </div>
  );
};

export {App};