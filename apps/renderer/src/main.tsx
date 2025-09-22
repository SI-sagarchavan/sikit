import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {HeroUIProvider} from "@heroui/react";

// import '@acme/ui/styles.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
<HeroUIProvider>
      <App />
      </HeroUIProvider>
  </StrictMode>,
)