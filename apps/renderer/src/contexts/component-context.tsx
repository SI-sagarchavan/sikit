import { createContext, useContext, useState, type ReactNode } from 'react'

interface ComponentData {
  name: string
  exports: any[],
  config: string
}

interface ComponentContextType {
  selectedComponent: ComponentData
  setSelectedComponent: (component: ComponentData) => void
}

const ComponentContext = createContext<ComponentContextType | undefined>(undefined)

interface ComponentProviderProps {
  children: ReactNode
}

export function ComponentProvider({ children }: ComponentProviderProps) {
  const [selectedComponent, setSelectedComponent] = useState<ComponentData>({
    "name": "button",
    "exports": [
        "Button"
    ],
    "config": "buttonStoryConfig"
})

  const value: ComponentContextType = {
    selectedComponent,
    setSelectedComponent,
  }

  return (
    <ComponentContext.Provider value={value}>
      {children}
    </ComponentContext.Provider>
  )
}

export function useComponent() {
  const context = useContext(ComponentContext)
  if (context === undefined) {
    throw new Error('useComponent must be used within a ComponentProvider')
  }
  return context
}
