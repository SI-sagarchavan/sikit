import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@acme/ui";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Hello
    </Button>
  ),
  name: "Button",
  args: {
   size: "md",
   variant: "primary",
   disabled: true,
   type: "button",
  },
  argTypes : {
    size: {
      control : "select",
      options : ["sm", "md", "lg"],
      description :"The size of the button",
      name : "szie",
      type: {
        name : "string",
      }
    },
    variant: {
      control : "select",
      options : ["primary", "secondary", "destructive", "outline", "ghost", "link"],
    },
    disabled: {
      control : "boolean",
      table:{
        defaultValue : {
          summary : "false"
        },
        category:"Basic",
        subcategory : "Disabled",
        type : {
          detail : "boolean",
          summary : "false",
        }
      }
    },
    type: {
      control : "select",
      options : ["button", "submit", "reset"]
    }
  }
};
