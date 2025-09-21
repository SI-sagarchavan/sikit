import type { Meta, StoryObj } from '@storybook/react-vite';

import { useComponent } from "../../contexts/component-context"

const Workspace = () => {
  const { selectedComponent } = useComponent()

  const Component = window.AcmeCore[selectedComponent.exports[0]]

  const componentConfig:any = window.AcmeCore[selectedComponent?.config]

  console.log("====", componentConfig)

  const meta = {
    component: Component,
  } satisfies Meta<typeof Component>;
  
  type Story = StoryObj<typeof meta>;

   const Story: Story = {
    render : (props) => {
       return <Component {...props} >{props.children}</Component>
    },
    name : selectedComponent.name,
    args : {
       ...componentConfig.args,
    },
    argTypes:{
      ...componentConfig.argTypes,
      },
    }

    const { render: renderComponent, args } = Story

  return (
    <div style={{ padding: '20px', height: '100%' }}>
      {renderComponent && renderComponent(args || {}, {} as any)}
    </div>
  ) 
}

export default Workspace
