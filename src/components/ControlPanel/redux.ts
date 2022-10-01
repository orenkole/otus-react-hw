import { State } from "@/redux/state";
import { updateFilling, updateSize } from "@/common/helperFunctions";
import { initialState } from "@/App";

export const UPDATE_FILLING_PERCENTAGE =
  "components/controlPanel/UPDATE_FILLING_PERCENTAGE";

type UpdateFillingPercentagePayload = {
  percentage: number;
};

type UpdateFillingPercentageAction = {
  type: typeof UPDATE_FILLING_PERCENTAGE;
  payload: UpdateFillingPercentagePayload;
};

export const updateFillingPercentageAC = (
  payload: UpdateFillingPercentagePayload
): UpdateFillingPercentageAction => ({
  type: UPDATE_FILLING_PERCENTAGE,
  payload,
});

export const UPDATE_WIDTH = "components/controlPanel/UPDATE_WIDTH";

type UpdateWidthPayload = {
  width: number;
};

type UpdateWidthAction = {
  type: typeof UPDATE_WIDTH;
  payload: UpdateWidthPayload;
};

export const updateWidthAC = (
  payload: UpdateWidthPayload
): UpdateWidthAction => ({
  type: UPDATE_WIDTH,
  payload,
});

export const UPDATE_HEIGHT = "components/controlPanel/UPDATE_HEIGHT";

type UpdateHeightPayload = {
  height: number;
};

type UpdateHeightAction = {
  type: typeof UPDATE_HEIGHT;
  payload: UpdateHeightPayload;
};

export const updateHeightAC = (
  payload: UpdateHeightPayload
): UpdateHeightAction => ({
  type: UPDATE_HEIGHT,
  payload,
});

export const RESET = "components/controlPanel/RESET";

type ResetAction = {
  type: typeof RESET;
};

export const resetAC = (): ResetAction => ({
  type: RESET,
});

type ControlPanelAction =
  | UpdateFillingPercentageAction
  | UpdateWidthAction
  | UpdateHeightAction
  | ResetAction;

export const controlPanelReducer = (
  state: State,
  action: ControlPanelAction
): State => {
  switch (action.type) {
  case UPDATE_FILLING_PERCENTAGE:
    return <State>{
      ...state,
      fillingPercentage: action.payload.percentage,
      fieldInfo: updateFilling({
        prevFieldInfo: state.fieldInfo,
        width: state.width,
        height: state.height,
        fillingPercentage: action.payload.percentage,
      }),
    };
  case UPDATE_HEIGHT:
    return <State>{
      ...state,
      height: action.payload.height,
      fieldInfo: updateSize({
        prevFieldInfo: state.fieldInfo,
        fillingPercentage: state.fillingPercentage,
        width: state.width,
        height: action.payload.height,
      }),
    };
  case UPDATE_WIDTH:
    return <State>{
      ...state,
      width: action.payload.width,
      fieldInfo: updateSize({
        prevFieldInfo: state.fieldInfo,
        fillingPercentage: state.fillingPercentage,
        height: state.height,
        width: action.payload.width,
      }),
    };
  case RESET:
    return initialState;
  default:
    return state;
  }
};
