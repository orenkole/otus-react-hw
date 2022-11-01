import React from "react";
import { Story as StoryType } from "@storybook/react";
import { SignInForm, SignInFormPropsType } from ".";
import StoryRouter from "storybook-react-router";
import { Provider } from "react-redux";
import { setupStore } from "@/redux/store";

const Story = {
  title: "Sign in form",
  component: SignInForm,
};

const Template: StoryType<SignInFormPropsType> = (args) => (
  <Provider store={setupStore()}>
    <SignInForm {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.decorators = [StoryRouter];

export default Story;

// https://github.com/storybookjs/storybook/issues/769
// https://github.com/gvaldambrini/storybook-router/
