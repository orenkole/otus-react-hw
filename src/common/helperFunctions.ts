import { FieldStateType } from "@/common/types";
import { nanoid } from "nanoid";

export const placeItemsIntoCells = (args: {
  field: FieldStateType;
  itemsLeftToPlace: number;
  indexesOfEmptyCells: Array<{ x: number; y: number }>;
}): FieldStateType => {
  const newField = args.field.map((row) => row.map((cell) => ({ ...cell })));
  let itemsLeftToPlace = args.itemsLeftToPlace;
  while (itemsLeftToPlace > 0) {
    const randomPointer = Math.floor(
      Math.random() * args.indexesOfEmptyCells.length
    );
    const chosenCellIndexes = args.indexesOfEmptyCells[randomPointer];
    newField[chosenCellIndexes.y][chosenCellIndexes.x].cellMode = 1;
    args.indexesOfEmptyCells = args.indexesOfEmptyCells.filter(
      (_, index) => index !== randomPointer
    );
    itemsLeftToPlace--;
  }
  return newField;
};

export const removeItemsFromCells = (args: {
  field: FieldStateType;
  itemsLeftToRemove: number;
}) => {
  const newField = args.field.map((row) => row.map((cell) => ({ ...cell })));
  let indexesOfFilledCells = args.field
    .flat()
    .filter((cell) => cell.cellMode === 1)
    .map((cell) => ({ x: cell.x, y: cell.y }));
  let itemsLeftToRemove = args.itemsLeftToRemove;
  while (itemsLeftToRemove > 0) {
    const randomPointer = Math.floor(
      Math.random() * indexesOfFilledCells.length
    );
    const chosenCellIndexes = indexesOfFilledCells[randomPointer];
    newField[chosenCellIndexes.y][chosenCellIndexes.x].cellMode = 0;
    indexesOfFilledCells = indexesOfFilledCells.filter(
      (_, index) => index !== randomPointer
    );
    itemsLeftToRemove--;
  }
  return newField;
};

export const setInitialFieldInfo = (args: {
  width: number;
  height: number;
  fillingPercentage: number;
}): FieldStateType => {
  const field = Array.from({ length: args.height }, (_, y) =>
    Array.from({ length: args.width }, (_, x) => ({
      cellMode: 0,
      x,
      y,
      id: `${nanoid(10)}`,
    }))
  );
  const fillingProbability =
    (args.fillingPercentage > 100 && 1) ||
    (args.fillingPercentage < 0 && 0) ||
    args.fillingPercentage / 100;
  const indexesOfEmptyCells = field
    .map((row) => row.map((cell) => ({ x: cell.x, y: cell.y })))
    .flat();
  const itemsLeftToPlace = Math.floor(
    args.height * args.width * fillingProbability
  );
  const fieldFilled = placeItemsIntoCells({
    indexesOfEmptyCells,
    itemsLeftToPlace,
    field,
  });
  return fieldFilled;
};

export const updateSize = (args: {
  width: number;
  height: number;
  prevFieldInfo: FieldStateType;
  fillingPercentage: number;
}): FieldStateType => {
  const fillingProbability: number =
    (args.fillingPercentage > 100 && 1) ||
    (args.fillingPercentage < 0 && 0) ||
    args.fillingPercentage / 100;
  const indexesToAdjust: Array<{ x: number; y: number }> = [];
  const newFieldInfo = Array.from({ length: args.height }, (_, y) =>
    Array.from({ length: args.width }, (_, x) => {
      if (args.prevFieldInfo[y] && args.prevFieldInfo[y][x]) {
        return args.prevFieldInfo[y][x];
      } else {
        indexesToAdjust.push({ y, x });
        return {
          cellMode: 0,
          x,
          y,
          id: `${nanoid(10)}`,
        };
      }
    })
  );
  const itemsAlreadyPlaced = newFieldInfo
    .flat()
    .filter((item) => item.cellMode === 1).length;
  const totalItemsToPlace = Math.ceil(
    newFieldInfo.flat().length * fillingProbability
  );
  const itemsLeftToPlace = totalItemsToPlace - itemsAlreadyPlaced;
  let fieldFilled: FieldStateType = newFieldInfo;
  console.log(" items left to place", itemsLeftToPlace);
  if (itemsLeftToPlace > 0) {
    if (indexesToAdjust.length < itemsLeftToPlace) {
      const wholeFieldIndexes = newFieldInfo
        .flat()
        .filter((cell) => cell.cellMode === 0)
        .map((cell) => ({ x: cell.x, y: cell.y }));
      fieldFilled = placeItemsIntoCells({
        field: newFieldInfo,
        itemsLeftToPlace,
        indexesOfEmptyCells: wholeFieldIndexes,
      });
    } else {
      fieldFilled = placeItemsIntoCells({
        field: newFieldInfo,
        itemsLeftToPlace,
        indexesOfEmptyCells: indexesToAdjust,
      });
    }
  }
  if (itemsLeftToPlace < 0) {
    fieldFilled = removeItemsFromCells({
      field: newFieldInfo,
      itemsLeftToRemove: -1 * itemsLeftToPlace,
    });
  }
  return fieldFilled;
};

export const updateFilling = (args: {
  prevFieldInfo: FieldStateType;
  fillingPercentage: number;
}): FieldStateType => {
  const fillingProbability: number =
    (args.fillingPercentage > 100 && 1) ||
    (args.fillingPercentage < 0 && 0) ||
    args.fillingPercentage / 100;
  const itemsAlreadyPlaced = args.prevFieldInfo
    .flat()
    .filter((item) => item.cellMode === 1).length;
  const totalItemsToPlace = Math.ceil(
    args.prevFieldInfo.flat().length * fillingProbability
  );
  const itemsLeftToPlace = totalItemsToPlace - itemsAlreadyPlaced;
  let fieldFilled: FieldStateType = args.prevFieldInfo;
  const emptyCellsIndexes = args.prevFieldInfo
    .flat()
    .filter((cell) => cell.cellMode === 0)
    .map((cell) => ({ x: cell.x, y: cell.y }));
  if (itemsLeftToPlace > 0) {
    fieldFilled = placeItemsIntoCells({
      field: args.prevFieldInfo,
      itemsLeftToPlace,
      indexesOfEmptyCells: emptyCellsIndexes,
    });
  }
  if (itemsLeftToPlace < 0) {
    fieldFilled = removeItemsFromCells({
      field: args.prevFieldInfo,
      itemsLeftToRemove: -1 * itemsLeftToPlace,
    });
  }
  return fieldFilled;
};
