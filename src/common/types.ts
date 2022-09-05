import {Dispatch} from "react";

export type AppStateType = {
    fieldInfo: FieldStateType;
    fillingPercentage: number,
    width: number,
    height: number,
}

export type CellInfoType = {
    cellMode: number;
    x: number;
    y: number;
    id: string
}

export type FieldStateType = CellInfoType[][];

export type ActionsType = 
    | { type: "UPDATE_FILLING_PERCENTAGE"; payload: number; } 
    | { type: "UPDATE_WIDTH"; payload: number; }
    | { type: "UPDATE_HEIGHT"; payload: number; }
    | { type: "CELL_CLICK"; payload: string; }
    | { type: "RESET" }

export type changeHandler = (args: {
    ev: React.ChangeEvent<HTMLInputElement>,
    dispatch: Dispatch<ActionsType>
}) => void;

export type resetHandler = (args: {
    dispatch: Dispatch<ActionsType>
}) => void;