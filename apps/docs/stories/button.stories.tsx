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
      name : "Size",
      type: {
        name : "string",
      }
    },
    variant: {
      control : "select",
      description :"The variant of the button",
      name : "Variant",
      options : ["primary", "secondary", "destructive", "outline", "ghost", "link"],
    },
    disabled: {
      control : "boolean",
      description :"The disabled state of the button",
      name : "Disabled",
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
      description :"The type of the button",
      name : "Type",
      options : ["button", "submit", "reset"]
    }
  }
};
