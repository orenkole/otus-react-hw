import {
  placeItemsIntoCells,
  removeItemsFromCells,
  updateSize,
  updateFilling,
} from "./helperFunctions";

const FieldMock = [
  [
    {
      cellMode: 0,
      x: 0,
      y: 0,
      id: "NHTlK10-Ia",
    },
    {
      cellMode: 0,
      x: 1,
      y: 0,
      id: "Y5EfingCBe",
    },
  ],
  [
    {
      cellMode: 0,
      x: 0,
      y: 1,
      id: "gvUGktH4nP",
    },
    {
      cellMode: 1,
      x: 1,
      y: 1,
      id: "RM9fXHVYn-",
    },
  ],
];

const FieldMockForShrinkSize = [
  [
    {
      cellMode: 1,
      x: 0,
      y: 0,
      id: "NHTlK10-Ia",
    },
    {
      cellMode: 1,
      x: 1,
      y: 0,
      id: "Y5EfingCBe",
    },
  ],
  [
    {
      cellMode: 0,
      x: 0,
      y: 1,
      id: "gvUGktH4nP",
    },
    {
      cellMode: 1,
      x: 1,
      y: 1,
      id: "RM9fXHVYn-",
    },
  ],
];

describe("Place Items Into Cells", () => {
  test("place Items Into Cells", () => {
    expect(
      placeItemsIntoCells({
        field: FieldMock,
        itemsLeftToPlace: 2,
        indexesOfEmptyCells: FieldMock.flat()
          .filter((cell) => cell.cellMode !== 1)
          .map((cell) => ({ x: cell.x, y: cell.y })),
      })
        .flat()
        .filter((cell) => cell.cellMode === 1)
    ).toHaveLength(3);
  });
});

describe("Remove Items From Cells", () => {
  test("Remove Items From Cells", () => {
    expect(
      removeItemsFromCells({
        field: FieldMock,
        itemsLeftToRemove: 1,
      })
        .flat()
        .filter((cell) => cell.cellMode === 1)
    ).toHaveLength(0);
  });
});

describe("update field", () => {
  test("enlarge size", () => {
    expect(
      updateSize({
        width: 3,
        height: 3,
        prevFieldInfo: FieldMock,
        fillingPercentage: 50,
      })
        .flat()
        .filter((cell) => cell.cellMode === 1)
    ).toHaveLength(5);
  });
  test("shrink size", () => {
    expect(
      updateSize({
        width: 2,
        height: 1,
        prevFieldInfo: FieldMockForShrinkSize,
        fillingPercentage: 50,
      })
        .flat()
        .filter((cell) => cell.cellMode === 1)
    ).toHaveLength(1);
  });

  test("change filling percentage", () => {
    expect(
      updateFilling({
        prevFieldInfo: FieldMock,
        fillingPercentage: 50,
      })
        .flat()
        .filter((cell) => cell.cellMode === 1)
    ).toHaveLength(2);
  });
});
