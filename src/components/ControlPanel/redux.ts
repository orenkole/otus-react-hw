import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateFilling, updateSize } from "@/common/helperFunctions";
import { fieldInitialState } from "@/redux/state";
import { CellMode } from "@/common/types";

type UpdateFillingPercentagePayload = {
  percentage: number;
};

type UpdateWidthPayload = {
  width: number;
};

type UpdateHeightPayload = {
  height: number;
};

type CellClickPayload = {
  id: string;
};

const { reducer, actions } = createSlice({
  name: "fieldInfo",
  initialState: fieldInitialState,
  reducers: {
    updateFillingPercentage: (
      state,
      action: PayloadAction<UpdateFillingPercentagePayload>
    ) => {
      state.fillingPercentage = action.payload.percentage;
      state.fieldInfo = updateFilling({
        prevFieldInfo: state.fieldInfo,
        width: state.width,
        height: state.height,
        fillingPercentage: action.payload.percentage,
      });
    },
    updateHeight: (state, action: PayloadAction<UpdateHeightPayload>) => {
      state.height = action.payload.height;
      state.fieldInfo = updateSize({
        prevFieldInfo: state.fieldInfo,
        fillingPercentage: state.fillingPercentage,
        width: state.width,
        height: action.payload.height,
      });
    },
    updateWidth: (state, action: PayloadAction<UpdateWidthPayload>) => {
      state.width = action.payload.width;
      state.fieldInfo = updateSize({
        prevFieldInfo: state.fieldInfo,
        fillingPercentage: state.fillingPercentage,
        height: state.height,
        width: action.payload.width,
      });
    },
    cellClick: (state, action: PayloadAction<CellClickPayload>) => {
      state.fieldInfo = state.fieldInfo.map((row) =>
        row.map((cell) =>
          cell.id !== action.payload.id
            ? cell
            : { ...cell, cellMode: Number(!cell.cellMode) as CellMode }
        )
      );
    },
    reset: (state = fieldInitialState) => {
      state.fieldInfo = fieldInitialState.fieldInfo;
      state.width = fieldInitialState.width;
      state.height = fieldInitialState.height;
      state.fillingPercentage = fieldInitialState.fillingPercentage;
    },
  },
});

export { reducer as fieldReducer, actions as fieldActions };
