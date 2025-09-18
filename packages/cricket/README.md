# @acme/cricket

A React component library for cricket-related UI components.

## Installation

```bash
npm install @acme/cricket
# or
pnpm add @acme/cricket
# or
yarn add @acme/cricket
```

## Usage

```tsx
import { Scorecard, PlayerCard, MatchStatus } from "@acme/cricket";

function App() {
  return (
    <div>
      <MatchStatus
        status="live"
        venue="Lord's Cricket Ground"
        date="2024-01-15"
      />
      
      <Scorecard
        team="Team A"
        score={250}
        wickets={4}
        overs={45.3}
      />
      
      <PlayerCard
        name="John Doe"
        role="batsman"
        runs={89}
        catches={2}
      />
    </div>
  );
}
```

## Components

### Scorecard

Display cricket team scorecard with runs, wickets, and overs.

**Props:**
- `team`: string - Team name
- `score`: number - Total runs scored
- `wickets`: number - Number of wickets fallen
- `overs`: number - Overs bowled
- `children?`: React.ReactNode - Optional additional content

### PlayerCard

Display individual player information and statistics.

**Props:**
- `name`: string - Player name
- `role`: "batsman" | "bowler" | "all-rounder" | "wicket-keeper" - Player role
- `runs?`: number - Runs scored (optional)
- `wickets?`: number - Wickets taken (optional)
- `catches?`: number - Catches taken (optional)
- `children?`: React.ReactNode - Optional additional content

### MatchStatus

Display match status, venue, and result information.

**Props:**
- `status`: "upcoming" | "live" | "completed" | "abandoned" - Match status
- `venue`: string - Match venue
- `date`: string - Match date
- `result?`: string - Match result (optional)
- `children?`: React.ReactNode - Optional additional content

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
- **Tsup** - Build tool and bundler
- **Tailwind CSS** - Styling (classes optimized for Tailwind)

## UMD Usage

The package also provides a UMD bundle for direct browser usage:

```html
<script src="https://unpkg.com/@acme/cricket/dist/index.global.js"></script>
<script>
  // Components available as AcmeCricket.Scorecard, AcmeCricket.PlayerCard, etc.
  const { Scorecard, PlayerCard, MatchStatus } = AcmeCricket;
</script>
``` 