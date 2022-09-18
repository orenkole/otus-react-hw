import React, { Dispatch, useRef } from "react";
import { ActionsType } from "@/common/types";
import { getCellBoxStyle } from "./style";
import { handleRipple } from "./helpers";

export type CellInfoType = {
  cellMode: number;
  x: number;
  y: number;
  id: string;
};

export type CellPropsType = {
  cellInfo: CellInfoType;
  dispatch: Dispatch<ActionsType>;
};

const Cell = (props: CellPropsType) => {
  const rippleElementRef = useRef<HTMLDivElement>(null);

  const handleClick = (args: { e: React.MouseEvent; ref: React.RefObject<HTMLDivElement> }) => {
    handleRipple({ ...args });
    props.dispatch({ type: "CELL_CLICK", payload: props.cellInfo.id });
  };

  const onClick = (e: React.MouseEvent) => {
    handleClick({ e, ref: rippleElementRef });
  };

  return (
    <div css={getCellBoxStyle({ cellMode: props.cellInfo.cellMode })} onClick={onClick}>
      <span>{props.cellInfo.cellMode}</span>
      <div ref={rippleElementRef}></div>
    </div>
  );
};

export { Cell };
