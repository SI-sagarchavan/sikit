import { useComponent } from "../../contexts/component-context"

const Workspace = () => {
  const { selectedComponent } = useComponent()

  if (!selectedComponent) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        No component selected
      </div>
    )
  }

  const Component = window.AcmeCore?.[selectedComponent.exports?.[0]]
  const componentConfig: any = window.AcmeCore?.[selectedComponent.config]

  if (!Component) {
    return (
      <div className="flex items-center justify-center h-full text-red-500">
        Component not found in window.AcmeCore
      </div>
    )
  }

  return (
    <Component {...(componentConfig?.args || {})}>
      {componentConfig?.args?.children}
    </Component>
  )
}

export default Workspace
