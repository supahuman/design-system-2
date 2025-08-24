# Design System

A modern, accessible design system built with TypeScript, React, and CSS Modules.

## Features

- 🎨 **Theme Tokens**: JSON-based design tokens with automated CSS variable generation
- 🧩 **Atomic Components**: Follows atomic design methodology
- ♿ **Accessibility**: ARIA attributes and keyboard navigation support
- 📚 **Documentation**: JSDoc comments for all components and utilities
- 🧪 **Testing**: Jest setup for component testing
- 📦 **Build System**: Optimized for distribution

## Installation

```bash
npm install @your-org/design-system
# or
yarn add @your-org/design-system
# or
pnpm add @your-org/design-system
```

## Usage

```tsx
import { Button, Input } from "@your-org/design-system";

function MyForm() {
  return (
    <div>
      <Input label="Email" type="email" placeholder="Enter your email" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

## Components

### Button

A versatile button component with multiple variants.

```tsx
<Button variant="primary">Click me</Button>
<Button variant="secondary">Cancel</Button>
<Button disabled>Disabled</Button>
```

### Input

A form input component with optional label.

```tsx
<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  onChange={(e) => handleChange(e.target.value)}
/>
```

## Theme Customization

The design system uses a token-based approach. You can customize the theme by modifying the `tokens.json` file:

```json
{
  "colors": {
    "primary": "#0070f3",
    "secondary": "#ff4081"
  }
}
```

Then run the theme generator to create CSS variables:

```bash
npm run generate-theme
```

## Development

### Setup

```bash
# Install dependencies
npm install

# Generate theme variables from tokens.json
npm run generate-theme

# Run tests
npm test
```

### Directory Structure

```
├── components/
│   ├── atoms/       # Atomic components (Button, Input, etc)
│   ├── molecules/   # Composed components
│   └── organisms/   # Complex components
├── theme/           # Design tokens and theme generation
├── utils/           # Utility functions
└── scripts/         # Build and theme generation scripts
```

## Accessibility

This design system follows WCAG 2.1 AA standards. All components include:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Color contrast compliance

## License

MIT
