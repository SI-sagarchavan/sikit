import type { Meta, StoryObj } from "@storybook/react";
import { Badge, badgeStoryConfig } from "@acme/ui";

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "destructive", "outline", "ghost", "link"],
      description :"The variant of the badge",
      name : "Variant",
      type: {
        name : "string",
      }
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

 console.log(badgeStoryConfig);

export const Primary: Story = {

  render: (props) => (
    <Badge {...props} />
  ),
  name: "Badge",
  args: {
    ...badgeStoryConfig.args
  },
  argTypes : {
    ...badgeStoryConfig.argTypes
  }
};
