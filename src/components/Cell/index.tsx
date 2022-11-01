import React, { useRef } from "react";
import { getCellBoxStyle } from "./style";
import { handleRipple } from "./helpers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { CellMode } from "@/common/types";
import { fieldActions } from "@/components/ControlPanel/redux";

export type CellInfoType = {
  cellMode: CellMode;
  x: number;
  y: number;
  id: string;
};

export type CellPropsType = {
  cellInfo: CellInfoType;
};

const Cell = (props: CellPropsType) => {
  const dispatch = useDispatch<AppDispatch>();
  const rippleElementRef = useRef<HTMLDivElement>(null);

  const handleClick = (args: { e: React.MouseEvent; ref: React.RefObject<HTMLDivElement> }) => {
    handleRipple({ ...args });
    dispatch(fieldActions.cellClick({ id: props.cellInfo.id }));
  };

  const onClick = (e: React.MouseEvent) => {
    handleClick({ e, ref: rippleElementRef });
  };

  return (
    <div css={getCellBoxStyle({ cellMode: props.cellInfo.cellMode })} onClick={onClick} data-testid={`row-${props.cellInfo.y}_column-${props.cellInfo.x}`}>
      <span data-testid={`cellMode-${props.cellInfo.cellMode}`}>{props.cellInfo.cellMode}</span>
      <div ref={rippleElementRef} data-testid="ripple"></div>
    </div>
  );
};

export { Cell };
