import React from "react";
import { AppDispatch } from "@/redux/store";

export type FieldStateType = {
  fieldInfo: FieldInfoType;
  fillingPercentage: number;
  width: number;
  height: number;
};

export type AuthStateType = {
  login: string;
};

export type AppStateType = AuthStateType | FieldStateType;

export type CellMode = 0 | 1;

export type CellInfoType = {
  cellMode: CellMode;
  x: number;
  y: number;
  id: string;
};

export type FieldInfoType = CellInfoType[][];

export type changeHandler = (args: {
  ev: React.ChangeEvent<HTMLInputElement>;
  dispatch: AppDispatch;
}) => void;

export type resetHandler = (args: { dispatch: AppDispatch }) => void;

export type formSubmitHandler = (args: {
  ev: React.SyntheticEvent;
  dispatch: AppDispatch;
}) => void;
