# 🪟 Window Object Access Guide

The `@acme/core` package and its manifest are now fully accessible via the global window object when loaded through the HTTP server on port 8081.

## 🚀 Quick Start

### 1. Serve the Package
```bash
# From packages/core directory
npm run serve

# Or for development with watch mode
npm run dev:serve
```

### 2. Load in HTML
```html
<script src="http://127.0.0.1:8081/index.global.js"></script>
<script>
  console.log('AcmeCore loaded:', window.AcmeCore);
  console.log('Manifest loaded:', window.AcmeCore.manifest);
</script>
```

## 📦 Available Through Window

### `window.AcmeCore`
The main global object containing all components and the manifest.

### `window.AcmeCore.manifest`
The complete manifest object with all component information:

```javascript
// Access the manifest
const manifest = window.AcmeCore.manifest;

// Get package info
console.log('Core version:', manifest.version);          // "1.0.0"
console.log('Package name:', manifest.name);             // "SkyDrop Core"
console.log('Generated at:', manifest.generatedAt);      // ISO timestamp

// Get component information
console.log('Total components:', manifest.totalComponents);
console.log('Component names:', Object.keys(manifest.components));
console.log('Button exports:', manifest.components.button.exports);

// Package information
console.log('Core package:', manifest.packages.core);
console.log('UI package:', manifest.packages.ui);

// Dependency information
console.log('All dependencies:', manifest.dependencies);

// Statistics
console.log('Total exports:', manifest.stats.totalExports);
console.log('Component types:', manifest.stats.componentTypes);
```

### `window.AcmeCore.Button`
Direct access to the Button component:
```javascript
const Button = window.AcmeCore.Button;
// Use Button component as needed
```

### `window.AcmeCore.Calendar`
Direct access to the Calendar component:
```javascript
const Calendar = window.AcmeCore.Calendar;
// Use Calendar component as needed
```

## 🛠️ Development Workflow

### Building with Manifest
```bash
cd packages/core
npm run build        # Generates manifest + builds bundle
```

### Development Server
```bash
cd packages/core
npm run dev:serve    # Watch mode + HTTP server
```

### Manual Server
```bash
cd packages/core
npm run serve        # Just HTTP server on port 8081
```

## 📊 Example Usage in Browser Console

After loading the script, try these in your browser console:

```javascript
// Check what's available
console.table(Object.keys(window.AcmeCore));

// Get manifest overview
const { manifest } = window.AcmeCore;
console.log(`${manifest.name} v${manifest.version}`);
console.log(`${manifest.totalComponents} components available`);

// List all components
Object.entries(manifest.components).forEach(([name, info]) => {
  console.log(`📦 ${name}:`, info.exports.join(', '));
});

// Check versions
console.log('Package versions:', {
  core: manifest.packages.core.version,
  ui: manifest.packages.ui.version
});
```

## 🔗 Integration Examples

### React Integration
```html
<script src="http://127.0.0.1:8081/index.global.js"></script>
<script>
  // Use components in React
  const { Button, Calendar, manifest } = window.AcmeCore;
  
  // Component registry
  const componentRegistry = Object.keys(manifest.components).reduce((acc, name) => {
    acc[name] = window.AcmeCore[manifest.components[name].exports[0]];
    return acc;
  }, {});
  
  console.log('Component registry:', componentRegistry);
</script>
```

### Version Checking
```javascript
// Check if version meets requirements
const requiredVersion = '1.0.0';
const currentVersion = window.AcmeCore.manifest.version;
const isCompatible = currentVersion >= requiredVersion;
console.log(`Version ${currentVersion} compatible:`, isCompatible);
```

## 🎯 Benefits

- **Zero Bundle Size**: Components loaded globally, no bundler needed
- **Runtime Inspection**: Full manifest available for runtime decisions
- **Version Awareness**: Always know what version you're using
- **Component Discovery**: Find available components dynamically
- **Dependency Tracking**: See all dependencies and peer dependencies
- **Development Tools**: Perfect for debugging and development

## 📁 URLs Available

When the server is running on port 8081:

- `http://127.0.0.1:8081/` - File listing
- `http://127.0.0.1:8081/index.global.js` - Main bundle with manifest
- `http://127.0.0.1:8081/index.js` - ESM bundle
- `http://127.0.0.1:8081/index.d.ts` - TypeScript definitions

The manifest is embedded in all JavaScript bundles and accessible as `window.AcmeCore.manifest` in the global bundle.
