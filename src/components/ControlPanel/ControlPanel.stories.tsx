import React from "react";
import { Story as StoryType } from "@storybook/react";
import { ControlPanel, ControlPanelPropsType } from ".";
import { setupStore } from "@/redux/store";
import { Provider } from "react-redux";

const Story = {
  title: "Control Panel",
  component: ControlPanel,
};

const Template: StoryType<ControlPanelPropsType> = (args) => (
  <Provider store={setupStore()}>
    <ControlPanel {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  fillingPercentage: 0,
  width: 2,
  height: 2,
};

export default Story;
