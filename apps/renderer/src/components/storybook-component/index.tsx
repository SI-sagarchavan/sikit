// src/components/StorybookButton.jsx

import { Story as ButtonStory } from '../../stories/otac-stories';

const StorybookButton = () => {
  // Access the render function and args from the imported story.
  const { render, args, argTypes } = ButtonStory;

  console.log(argTypes);

  // Call the render function and pass the args as props.
  // The original story has a fallback for children, so we replicate that.
  return render({ ...args, children: args.children || "Click meepic" });
};

export default StorybookButton;