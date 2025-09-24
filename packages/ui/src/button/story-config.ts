import type { StoryObj } from "@storybook/react";
import { Button } from "./index";

export type Story = StoryObj<typeof Button>;

export const buttonStoryConfig: Story = {
  args: {
    size: "md",
    variant: "link",
    disabled: false,
    type: "button",
    children: "Hello world",
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
           summary : "false",
         },
         category:"Hover",
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
}