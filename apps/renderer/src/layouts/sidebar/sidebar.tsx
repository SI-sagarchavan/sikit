import { useEffect, useState } from "react"
import { useComponent } from "../../contexts/component-context"

const Sidebar = () => {
    const { selectedComponent, setSelectedComponent } = useComponent()
    const [manifest, setManifest] = useState<any>(window.AcmeCore.manifest)

    useEffect(() => {
        setManifest(window.AcmeCore.manifest);
    }, [window.AcmeCore]);

  return (
    <div className="p-4">
        <div>
            <div className="flex justify-between items-center mb-4 py-4">
            <h3 className="text-lg font-bold">Components</h3>
            <p>({manifest?.totalComponents})</p>
            </div>
            <ul className="space-y-2">
               {Object.values(manifest?.components || {}).map((component: any) => {
                        const handleLoadComponent = () => {
                            const componentData = {
                                name: component.name,
                                exports: component.exports,
                                config: component.config
                            }
                            setSelectedComponent(componentData)
                        }
                    return (
                        <li key={component.name}
                            onClick={handleLoadComponent}
                            className={`${selectedComponent?.name === component.name ? 'bg-blue-500 text-white' : ''} p-2 rounded-md`}
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