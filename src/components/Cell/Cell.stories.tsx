import React from "react";
import { Story as StoryType } from "@storybook/react";
import { Cell, CellPropsType } from ".";
import { Provider } from "react-redux";
import { setupStore } from "@/redux/store";

const Story = {
  title: "Cell",
  component: Cell,
};

const Template: StoryType<CellPropsType> = (args) => (
  <Provider store={setupStore()}>
    <Cell {...args} />
  </Provider>
);

export const CellInitial = Template.bind({});
CellInitial.args = {
  cellInfo: {
    cellMode: 1,
    x: 2,
    y: 2,
    id: "1",
  },
};

export default Story;
