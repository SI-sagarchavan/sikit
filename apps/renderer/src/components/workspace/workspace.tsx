import React from "react"
import { useComponent } from "../../contexts/component-context"
import { Button } from "@acme/ui"

const Workspace = () => {
  const { selectedComponent, componentArgs } = useComponent()

  if (!selectedComponent) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        No component selected
      </div>
    )
  }

  const Component = window.AcmeCore?.[selectedComponent.exports?.[0]]
  const componentConfig: any = window.AcmeCore?.[selectedComponent.config]

  console.log("componentConfig" ,componentArgs);
  
  if (!Component) {
    return (
      <div className="flex items-center justify-center h-full text-red-500">
        Component not found in window.AcmeCore
      </div>
    )
  }

  return (
   
    <Component  {...(componentArgs || {})}>
      {componentConfig?.args?.children}
    </Component>
  )
}

export default Workspace
