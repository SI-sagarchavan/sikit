import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

interface ComponentData {
  name: string
  exports: any[],
  config: string
}

interface ComponentContextType {
  selectedComponent: ComponentData
  setSelectedComponent: (component: ComponentData) => void
  componentArgs: any
  setComponentArgs: (args: any) => void
}

const ComponentContext = createContext<ComponentContextType | undefined>(undefined)

interface ComponentProviderProps {
  children: ReactNode
}

export function ComponentProvider({ children }: ComponentProviderProps) {

  const args = {
    "name": "button",
    "exports": [
        "Button"
    ],
    "config": "buttonStoryConfig"
  }

  const argTypes = {...window.AcmeCore.manifest}

  const [selectedComponent, setSelectedComponent] = useState<ComponentData>({
    ...args
})

const [componentArgs, setComponentArgs] = useState<any | null>(null)


  const value: ComponentContextType = {
    selectedComponent,
    setSelectedComponent,
    componentArgs,
    setComponentArgs,
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
