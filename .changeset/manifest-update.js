#!/usr/bin/env node

/**
 * Changeset post-version hook to update manifests
 * This script runs after changeset version updates package versions
 */

import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

console.log('🔄 Updating manifests after version changes...')

try {
  // Update the core package manifest
  execSync('npm run generate:manifest', {
    cwd: path.join(rootDir, 'packages', 'core'),
    stdio: 'inherit'
  })
  
  console.log('✅ Manifests updated successfully!')
} catch (error) {
  console.error('❌ Failed to update manifests:', error.message)
  process.exit(1)
}
