import React,{ StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import * as ReactJSXRuntime from 'react/jsx-runtime';
import './index.css'
import App from './App.tsx'

window.React = React;
// @ts-expect-error - ReactJSXRuntime is a global variable
window.ReactJSXRuntime = ReactJSXRuntime;

// Also make it available as a module-like object
// @ts-expect-error - require is a global variable
window.require = window.require || function(name: string) {
  if (name === 'react/jsx-runtime') return ReactJSXRuntime;
  if (name === 'react') return window.React;
  throw new Error(`Module ${name} not found`);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)