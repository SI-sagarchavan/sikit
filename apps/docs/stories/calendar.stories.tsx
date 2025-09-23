import type { Meta, StoryObj } from "@storybook/react";
import { Calendar, calendarStoryConfig } from "@acme/ui";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  argTypes: {
    mode: {
      control: { type: "radio" },
      options: ["single", "multiple", "range", "default"],
      description :"The mode of the calendar",
      name : "Mode",
      type: {
        name : "string",
      }
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

 console.log(calendarStoryConfig);

export const Primary: Story = {
    

  render: (props) => (
    <Calendar {...props} />
  ),
  name: "Button",
  args: {
    ...calendarStoryConfig.args
  },
  argTypes : {
    ...calendarStoryConfig.argTypes
  }
};
