#!/usr/bin/env node

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function readPackageJson(packagePath) {
  try {
    const content = await fs.readFile(packagePath, 'utf-8')
    return JSON.parse(content)
  } catch (error) {
    console.warn(`Could not read package.json from ${packagePath}`)
    return null
  }
}

async function getComponentInfo(uiPackagePath) {
  const components = []
  
  try {
    // Read the main UI index to see what's exported
    const indexPath = path.join(uiPackagePath, 'src', 'index.ts')
    const indexContent = await fs.readFile(indexPath, 'utf-8')
    
    // Parse exports to find component directories
    const exportLines = indexContent.split('\n').filter(line => line.includes('export'))
    
    for (const line of exportLines) {
      const match = line.match(/export.*from\s+["']\.\/(.+)["']/)
      if (match) {
        const componentDir = match[1]
        const componentPath = path.join(uiPackagePath, 'src', componentDir)
        
        try {
          // Check if it's a directory with components
          const stats = await fs.stat(componentPath)
          if (stats.isDirectory()) {
            // Try to read the component's index file to get exports
            const componentIndexPath = path.join(componentPath, 'index.ts')
            const componentContent = await fs.readFile(componentIndexPath, 'utf-8')
            
            // Extract component names from exports
            const componentExports = []
            const exportMatches = componentContent.matchAll(/export.*?([A-Z][a-zA-Z0-9]*)/g)
            
            for (const match of exportMatches) {
              if (match[1] && !componentExports.includes(match[1])) {
                componentExports.push(match[1])
              }
            }
            
            components.push({
              name: componentDir,
              path: `./src/${componentDir}`,
              exports: componentExports,
              type: 'component'
            })
          }
        } catch (error) {
          // If we can't read the component directory, still record it
          components.push({
            name: componentDir,
            path: `./src/${componentDir}`,
            exports: [componentDir],
            type: 'module'
          })
        }
      }
    }
  } catch (error) {
    console.warn('Could not analyze UI components:', error.message)
  }
  
  return components
}

async function generateManifest() {
  const corePackagePath = path.resolve(__dirname, '..')
  const uiPackagePath = path.resolve(__dirname, '../../ui')
  
  // Read package.json files
  const corePackage = await readPackageJson(path.join(corePackagePath, 'package.json'))
  const uiPackage = await readPackageJson(path.join(uiPackagePath, 'package.json'))
  
  // Get component information
  const components = await getComponentInfo(uiPackagePath)
  
  // Create manifest
  const manifest = {
    name: "SkyDrop Core",
    version: corePackage?.version || "0.0.0",
    description: "A comprehensive design system core package",
    generatedAt: new Date().toISOString(),
    packages: {
      core: {
        name: corePackage?.name || "@acme/core",
        version: corePackage?.version || "0.0.0",
        description: "Core package that re-exports UI components"
      },
      ui: {
        name: uiPackage?.name || "@acme/ui",
        version: uiPackage?.version || "0.0.0", 
        description: "UI component library"
      }
    },
    components: components.reduce((acc, comp) => {
      acc[comp.name] = {
        name: comp.name,
        path: comp.path,
        exports: comp.exports,
        type: comp.type,
        version: uiPackage?.version || "0.0.0"
      }
      return acc
    }, {}),
    dependencies: {
      core: corePackage?.dependencies || {},
      ui: uiPackage?.dependencies || {},
      peerDependencies: {
        ...corePackage?.peerDependencies,
        ...uiPackage?.peerDependencies
      }
    },
    totalComponents: components.length,
    stats: {
      totalExports: components.reduce((sum, comp) => sum + comp.exports.length, 0),
      componentTypes: components.reduce((acc, comp) => {
        acc[comp.type] = (acc[comp.type] || 0) + 1
        return acc
      }, {})
    }
  }
  
  // Write manifest to src directory (will be built by tsup)
  const manifestPath = path.join(corePackagePath, 'src', 'manifest.json')
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2))
  
  console.log(`✅ Manifest generated successfully!`)
  console.log(`📦 Components: ${components.length}`)
  console.log(`🚀 Total exports: ${manifest.stats.totalExports}`)
  console.log(`📍 Generated at: ${manifestPath}`)
  
  return manifest
}

if (import.meta.url === `file://${process.argv[1]}`) {
  generateManifest().catch(console.error)
}

export { generateManifest }
