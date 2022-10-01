import React from 'react';
import { render, screen } from '@testing-library/react';
import { ControlPanel } from '.';
import {controlPanelReducer, RESET, UPDATE_FILLING_PERCENTAGE, UPDATE_HEIGHT, UPDATE_WIDTH} from "./redux";
import {initialStateMock} from "../../mocks/initialStateMock";
import {cloneObj} from "../../utils/helperFunctions";
import {initialState} from "../../App";

describe('ControlPanel rendering', () => {
  test('renders ControlPanel component', () => {
    render(<ControlPanel fillingPercentage={0} width={2} height={2} />);
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Stop')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByText('Slow')).toBeInTheDocument();
    expect(screen.getByText('Moderate')).toBeInTheDocument();
    expect(screen.getByText('Fast')).toBeInTheDocument();
    expect(screen.getByText('Filling percentage:')).toBeInTheDocument();
    expect(screen.getByText('Field width:')).toBeInTheDocument();
    expect(screen.getByText('Field height:')).toBeInTheDocument();
  });
});

describe("Control panel reducer", () => {
  test("1 percent for 25 cells is 1 filled cell", () => {
    const newState = cloneObj(initialStateMock);
    const updatedPercentageState = controlPanelReducer(initialStateMock, {
      type: UPDATE_FILLING_PERCENTAGE,
      payload: { percentage: 1 }
    });
    let filledCells = 0;
    for (const row of updatedPercentageState.fieldInfo) {
      for (const cell of row) {
        if (cell.cellMode === 1) {
          filledCells = filledCells + 1;
        }
      }
    }
    expect(filledCells).toEqual(1);
  })
  test("10 percent for 25 cells is 3 filled cells", () => {
    const updatedPercentageState = controlPanelReducer(initialStateMock, {
      type: UPDATE_FILLING_PERCENTAGE,
      payload: { percentage: 10 }
    });
    let filledCells = 0;
    for (const row of updatedPercentageState.fieldInfo) {
      for (const cell of row) {
        if (cell.cellMode === 1) {
          filledCells = filledCells + 1;
        }
      }
    }
    expect(filledCells).toEqual(3);
  })
  test("Update height", () => {
    const updatedState = controlPanelReducer(initialStateMock, {
      type: UPDATE_HEIGHT,
      payload: { height: 10 }
    });
    expect(updatedState.fieldInfo.length).toEqual(10);
  })
  test("Update width", () => {
    const updatedState = controlPanelReducer(initialStateMock, {
      type: UPDATE_WIDTH,
      payload: { width: 10 }
    });
    for (const row of updatedState.fieldInfo) {
      expect(row).toHaveLength(10);
    }
  })
  test("Reset", () => {
    const updatedState = controlPanelReducer(initialStateMock, {
      type: RESET,
    });
    expect(updatedState).toEqual(initialState)
  })
})
