import { useEffect, useState } from "react"
import { useComponent } from "../../contexts/component-context"

const Sidebar = () => {
    const { selectedComponent, setSelectedComponent } = useComponent()
    const [manifest, setManifest] = useState<any>(window.AcmeCore.manifest)

    useEffect(() => {
        setManifest(window.AcmeCore.manifest);
    }, [window.AcmeCore]);

  return (
    <div>
        <h2>{manifest?.name}</h2>
        <div>
            <h3>Components</h3>
            <ul>
               {Object.values(manifest?.components || {}).map((component: any) => {

                console.log("component", component)

                        const handleLoadComponent = () => {
                            const componentData = {
                                name: component.name,
                                exports: component.exports,
                                config: component.config
                            }
                            setSelectedComponent(componentData)
                            console.log('Selected component:', componentData)
                        }

                    return (
                        <li key={component.name}
                            onClick={handleLoadComponent}
                            className={selectedComponent?.name === component.name ? 'selected' : ''}
                        >
                            {component.name}
                        </li>
                    )
               })}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar