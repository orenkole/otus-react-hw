import React from "react";
import { Story as StoryType } from "@storybook/react";
import {SignInForm, SignInFormPropsType} from ".";

const Story = {
  title: "Sign in form",
  component: SignInForm,
};

const Template: StoryType<SignInFormPropsType> = (args) => <SignInForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default Story;