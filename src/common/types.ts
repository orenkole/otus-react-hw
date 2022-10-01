import { Dispatch } from "react";

export type AppStateType = {
  fieldInfo: FieldStateType;
  fillingPercentage: number;
  width: number;
  height: number;
  login: string;
};

export type CellInfoType = {
  cellMode: 0 | 1;
  x: number;
  y: number;
  id: string;
};

export type FieldStateType = CellInfoType[][];

export type ActionsType =
  | { type: "UPDATE_FILLING_PERCENTAGE"; payload: number }
  | { type: "UPDATE_WIDTH"; payload: number }
  | { type: "UPDATE_HEIGHT"; payload: number }
  | { type: "CELL_CLICK"; payload: string }
  | { type: "RESET" }
  | { type: "LOGIN"; payload: string }
  | { type: "LOGOUT" };

export type changeHandler = (args: {
  ev: React.ChangeEvent<HTMLInputElement>;
  dispatch: Dispatch<ActionsType>;
}) => void;

export type resetHandler = (args: { dispatch: Dispatch<ActionsType> }) => void;

export type formSubmitHandler = (args: {
  ev: React.SyntheticEvent;
  dispatch: Dispatch<ActionsType>;
}) => void;
