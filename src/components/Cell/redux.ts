import { State } from "@/redux/state";

export const CELL_CLICK = "components/cell/CELL_CLICK";

type CellClickPayload = {
  id: string;
};

type CellClickAction = {
  type: typeof CELL_CLICK;
  payload: CellClickPayload;
};

export const cellClickAC = (payload: CellClickPayload): CellClickAction => ({
  type: CELL_CLICK,
  payload,
});

type CellActionType = CellClickAction;

export const cellClickReducer = (
  state: State,
  action: CellActionType
): State => {
  switch (action.type) {
  case CELL_CLICK:
    return <State>{
      ...state,
      fieldInfo: state.fieldInfo.map((row) =>
        row.map((cell) =>
          cell.id !== action.payload.id
            ? cell
            : { ...cell, cellMode: cell.cellMode === 0 ? 1 : 0 }
        )
      ),
    };
  default:
    return state;
  }
};
