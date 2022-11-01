import { AuthStateType, CellMode, FieldStateType } from "@/common/types";
import { setInitialFieldInfo } from "@/common/helperFunctions";

export const initialFieldParams = { width: 5, height: 5, fillingPercentage: 0 };

export const fieldInitialState: FieldStateType = {
  fieldInfo: setInitialFieldInfo({
    width: initialFieldParams.width,
    height: initialFieldParams.height,
    fillingPercentage: initialFieldParams.fillingPercentage,
  }),
  fillingPercentage: initialFieldParams.fillingPercentage,
  width: initialFieldParams.width,
  height: initialFieldParams.height,
};

export const authInitialState: AuthStateType = {
  login: localStorage.getItem("login") || "",
};

export type State = {
  fieldInfo: Array<
    Array<{
      cellMode: CellMode;
      x: number;
      y: number;
      id: string;
    }>
  >;
  fillingPercentage: number;
  width: number;
  height: number;
  login: string;
};
