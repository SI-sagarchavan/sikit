import { useEffect, useState } from "react"

declare global {
  interface Window {
    SikitUI: any
    React: any
    ReactDOM: any
  }
}

const useSikit = () => {
  const [components, setComponents] = useState<any>(null)

  useEffect(() => {
    const loadComponents = () => {
      console.log('=== Debugging SikitUI Loading ===')
      console.log('window.React:', typeof window.React, !!window.React)
      console.log('window.ReactDOM:', typeof window.ReactDOM, !!window.ReactDOM)
      console.log('window.SikitUI:', typeof window.SikitUI, !!window.SikitUI)
      
      // Check if React is available globally (needed for UMD bundle)
      if (!window.React) {
        console.log('❌ React not available globally yet')
        return
      }
      
      if (typeof window !== 'undefined' && window.SikitUI) {
        console.log('Raw window.SikitUI:', window.SikitUI)
        console.log('window.SikitUI keys:', Object.keys(window.SikitUI))
        console.log('window.SikitUI.default:', window.SikitUI.default)
        console.log('window.SikitUI.default keys:', Object.keys(window.SikitUI.default || {}))
        console.log('window.SikitUI.Button:', window.SikitUI.Button)
        console.log('window.SikitUI.createButton:', window.SikitUI.createButton)
        
        // Try to construct the full components object from different sources
        const sikitComponents = {
          Button: window.SikitUI.Button || window.SikitUI.default?.Button,
          createButton: window.SikitUI.createButton || window.SikitUI.default?.createButton
        }
        
        console.log('Constructed sikitComponents:', sikitComponents)
        console.log('Button component:', sikitComponents?.Button)
        console.log('Button component type:', typeof sikitComponents?.Button)
        console.log('createButton function:', sikitComponents?.createButton)
        console.log('createButton function type:', typeof sikitComponents?.createButton)
        
        if (sikitComponents?.Button || sikitComponents?.createButton) {
          setComponents(sikitComponents)
          console.log('✅ SikitUI components loaded successfully')
        } else {
          console.log('❌ No components found in SikitUI')
        }
      } else {
        console.log('❌ SikitUI not found on window object')
      }
    }

    // Try to load immediately
    loadComponents()

    // If not available, wait for React and SikitUI to load
    const interval = setInterval(() => {
      if (window.React && window.SikitUI) {
        loadComponents()
        clearInterval(interval)
      }
    }, 100)

    // Cleanup after 5 seconds
    setTimeout(() => {
      clearInterval(interval)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return components
}

export { useSikit }