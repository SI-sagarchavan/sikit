// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@acme/ui';

//👇 This default export determines where your story goes in the story list
const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
 render : (props) => {
    return <Button {...props} >{props.children || "Click me"}</Button>
 },
 name : "Button",
 args : {
    size: "lg",
    variant : "secondary",
 },
 argTypes:{
   size:{
      control : "select",
      options : ["sm", "md", "lg"],
   },
   variant:{
      control : "select",
      options : ["primary", "secondary", "destructive", "outline", "ghost", "link"],
   }
 }
};