import React, { Dispatch, useEffect } from "react";
import { changeHandler, ActionsType, resetHandler } from "@/common/types";
import {
  radioToolbarStyle,
  formStyle,
  controlButtonsStyle,
  inputStyle,
  fieldSizesStyle,
} from "./style";
import { Button } from "@/elements/Button";

export type ControlPanelPropsType = {
  dispatch: Dispatch<ActionsType>;
  fillingPercentage: number;
  width: number;
  height: number;
};

const onFillingPercentageChange: changeHandler = ({ ev, dispatch }) => {
  dispatch({ type: "UPDATE_FILLING_PERCENTAGE", payload: +ev.target.value });
};

const onWidthChange: changeHandler = ({ ev, dispatch }) => {
  const width = +ev.target.value >= 1 ? +ev.target.value : 1;
  dispatch({ type: "UPDATE_WIDTH", payload: width });
};

const onHeightChange: changeHandler = ({ ev, dispatch }) => {
  const height = +ev.target.value >= 1 ? +ev.target.value : 1;
  dispatch({ type: "UPDATE_HEIGHT", payload: height });
};

const onReset: resetHandler = ({ dispatch }) => {
  console.log("on reset");
  dispatch({ type: "RESET" });
};

const onSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault();
};

const ControlPanel = (props: ControlPanelPropsType) => {
  const { dispatch } = props;

  return (
    <form css={formStyle} onSubmit={onSubmit}>
      <div css={controlButtonsStyle}>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button
          onClick={() => {
            onReset({ dispatch });
          }}
        >
          Reset
        </Button>
      </div>
      <div css={radioToolbarStyle}>
        <input
          css={inputStyle}
          type='radio'
          name='speed'
          value='slow'
          id='radio-slow'
        />
        <label htmlFor='radio-slow'>Slow</label>
        <input
          css={inputStyle}
          type='radio'
          name='speed'
          value='moderate'
          id='radio-moderate'
        />
        <label htmlFor='radio-moderate'>Moderate</label>
        <input
          css={inputStyle}
          type='radio'
          name='speed'
          value='fast'
          id='radio-fast'
        />
        <label htmlFor='radio-fast'>Fast</label>
      </div>
      <label>
        Filling percentage:
        <input
          css={inputStyle}
          type='number'
          placeholder='Filling percentage'
          value={props.fillingPercentage.toString()}
          onChange={(ev) => {
            onFillingPercentageChange({ ev, dispatch });
          }}
        />
      </label>
      <div css={fieldSizesStyle}>
        <label>
          Field width:
          <input
            css={inputStyle}
            type='number'
            placeholder='Field width'
            value={props.width}
            onChange={(ev) => {
              onWidthChange({ ev, dispatch });
            }}
          />
        </label>
        <label>
          Field height:
          <input
            css={inputStyle}
            type='number'
            placeholder='Field height'
            value={props.height}
            onChange={(ev) => {
              onHeightChange({ ev, dispatch });
            }}
          />
        </label>
      </div>
    </form>
  );
};

export { ControlPanel };
