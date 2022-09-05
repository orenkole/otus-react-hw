import { ActionsType, AppStateType } from '@/common/types';
import { updateSize, updateFilling } from '@/common/helperFunctions';
import { initialState } from '@/App';

const reducer = (
  prevState: AppStateType,
  action: ActionsType
): AppStateType => {
  switch (action.type) {
    case 'UPDATE_FILLING_PERCENTAGE':
      return {
        ...prevState,
        fillingPercentage: action.payload,
        fieldInfo: updateFilling({
          prevFieldInfo: prevState.fieldInfo,
          fillingPercentage: action.payload,
        }),
      };
    case 'CELL_CLICK':
      return {
        ...prevState,
        fieldInfo: [
          ...prevState.fieldInfo.map((row) =>
            row.map((cell) => {
              if (cell.id !== action.payload) {
                return cell;
              } else {
                return {
                  ...cell,
                  cellMode: cell.cellMode === 1 ? 0 : 1,
                };
              }
            })
          ),
        ],
      };
    case 'UPDATE_HEIGHT':
      return {
        ...prevState,
        height: action.payload,
        fieldInfo: updateSize({
          prevFieldInfo: prevState.fieldInfo,
          fillingPercentage: prevState.fillingPercentage,
          width: prevState.width,
          height: action.payload,
        }),
      };
    case 'UPDATE_WIDTH':
      console.log('update width');
      return {
        ...prevState,
        width: action.payload,
        fieldInfo: updateSize({
          prevFieldInfo: prevState.fieldInfo,
          fillingPercentage: prevState.fillingPercentage,
          height: prevState.height,
          width: action.payload,
        }),
      };
    case 'RESET':
      console.log('reset');
      return initialState;
    default:
      return prevState;
  }
};

export { reducer };
