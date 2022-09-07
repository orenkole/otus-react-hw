import React from "react";
import { Story as StoryType } from "@storybook/react";
import { Field, FieldPropsType } from ".";

const Story = {
  title: "Field",
  component: Field,
};

const Template: StoryType<FieldPropsType> = (args) => <Field {...args} />;

export const EmptyField = Template.bind({});
EmptyField.args = {
  fieldInfo: [
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
        cellMode: 0,
        x: 1,
        y: 1,
        id: "RM9fXHVYn-",
      },
    ],
  ],
};

export default Story;
