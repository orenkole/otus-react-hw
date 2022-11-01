import React  from "react";
import { changeHandler, resetHandler } from "@/common/types";
import { radioToolbarStyle, formStyle, controlButtonsStyle, fieldSizesStyle } from "./style";
import { Button } from "@/elements/Button";
import { CustomInput } from "@/elements/CustomInput/CustomInput.index";
import { useDispatch } from "react-redux";
import { fieldActions } from "@/components/ControlPanel/redux";

export type ControlPanelPropsType = {
  fillingPercentage: number;
  width: number;
  height: number;
};

const onFillingPercentageChange: changeHandler = ({ ev, dispatch }) => {
  dispatch(fieldActions.updateFillingPercentage({ percentage: +ev.target.value }) );
};

const onWidthChange: changeHandler = ({ ev, dispatch }) => {
  dispatch(fieldActions.updateWidth({ width: +ev.target.value }));
};

const onHeightChange: changeHandler = ({ ev, dispatch }) => {
  dispatch(fieldActions.updateHeight({ height: +ev.target.value }));
};

const onReset: resetHandler = ({ dispatch }) => {
  dispatch(fieldActions.reset());
};

const onSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault();
};

const ControlPanel = (props: ControlPanelPropsType) => {
  const dispatch = useDispatch();

  return (
    <>
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
          <CustomInput type="radio" name="speed" value="slow" id="radio-slow" />
          <label htmlFor="radio-slow">Slow</label>
          <CustomInput type="radio" name="speed" value="moderate" id="radio-moderate" />
          <label htmlFor="radio-moderate">Moderate</label>
          <CustomInput type="radio" name="speed" value="fast" id="radio-fast" />
          <label htmlFor="radio-fast">Fast</label>
        </div>
        <label>
          Filling percentage:
          <CustomInput
            type="number"
            placeholder="Filling percentage"
            value={props.fillingPercentage.toString()}
            onChange={(ev) => {
              onFillingPercentageChange({ ev, dispatch });
            }}
            width="50px"
          />
        </label>
        <div css={fieldSizesStyle}>
          <label>
            Field width:
            <CustomInput
              type="number"
              placeholder="Field width"
              value={props.width}
              onChange={(ev) => {
                onWidthChange({ ev, dispatch });
              }}
              width="50px"
            />
          </label>
          <label>
            Field height:
            <CustomInput
              type="number"
              placeholder="Field height"
              value={props.height}
              onChange={(ev) => {
                onHeightChange({ ev, dispatch });
              }}
              width="50px"
            />
          </label>
        </div>
      </form>
    </>
  );
};

export { ControlPanel };
