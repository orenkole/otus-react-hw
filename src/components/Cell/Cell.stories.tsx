import React from "react";
import { Story as StoryType } from "@storybook/react";
import {Cell, CellPropsType} from ".";

const Story = {
  title: "Cell",
  component: Cell,
};

const Template: StoryType<CellPropsType> = (args) => <Cell {...args} />;

export const CellInitial = Template.bind({});
CellInitial.args = {
  cellInfo: {
    cellMode: 1,
    x: 2,
    y: 2,
    id: "1"
  },
};

export default Story;