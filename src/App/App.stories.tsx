import React from "react";
import { Story as StoryType } from "@storybook/react";
import { App } from ".";

const Story = {
  title: "App",
  component: App,
  argTypes: {},
};

const Template: StoryType = (args) => <App {...args} />;

export const AppTemplate = Template.bind({});

export default Story;
