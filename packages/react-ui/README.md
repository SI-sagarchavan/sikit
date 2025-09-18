# @acme/react-ui

A React UI component library built with Vite.

## Installation

```bash
npm install @acme/react-ui
# or
pnpm add @acme/react-ui
# or
yarn add @acme/react-ui
```

## Usage

```tsx
import { Button, Badge } from "@acme/react-ui";

function App() {
  return (
    <div>
      <Button onClick={() => alert("Hello!")}>
        Click me
      </Button>
      <Badge>New</Badge>
    </div>
  );
}
```

## Components

### Button

A simple button component that extends native HTML button attributes.

### Badge

A simple badge component for displaying labels or status.

## Development

```bash
# Build the package
pnpm build

# Watch for changes during development
pnpm dev

# Run linting
pnpm lint

# Clean build artifacts
pnpm clean
```

## Tech Stack

- **React** - Component framework
- **TypeScript** - Type safety
- **Vite** - Build tool and bundler
- **vite-plugin-dts** - TypeScript declaration generation 