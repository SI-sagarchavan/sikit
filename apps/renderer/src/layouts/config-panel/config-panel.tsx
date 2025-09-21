import { useComponent } from "../../contexts/component-context"

const ConfigPanel = () => {

    const { selectedComponent } = useComponent()

    const componentConfig:any = window.AcmeCore[selectedComponent.config]

    console.log(componentConfig.argTypes)

  return (
    <div>
        <h2>{selectedComponent.name}</h2>
        <div>
            <div>{Object.values(componentConfig?.argTypes).map((argType:any) => {
                return (
                    <div key={argType.name}>{argType.name}</div>
                )
            })}</div>
        </div>
    </div>
  )
}

export default ConfigPanel