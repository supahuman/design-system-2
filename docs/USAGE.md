# Usage Guide

This guide provides examples of how to use the components in this design system.

## Theme Setup

Import the theme CSS in your application entry point:

```tsx
import '@your-org/design-system/dist/theme/theme.css';
```

## Components

### Button

```tsx
import { Button } from '@your-org/design-system';

// Primary button
<Button variant="primary">Submit</Button>

// Secondary button
<Button variant="secondary">Cancel</Button>

// Disabled button
<Button disabled>Inactive</Button>

// Button with custom event handler
<Button
  variant="primary"
  onClick={() => console.log('Button clicked!')}
>
  Click Me
</Button>

// Button with custom aria attributes
<Button
  variant="primary"
  aria-controls="panel-1"
>
  Open Panel
</Button>
```

### Input

```tsx
import { Input } from '@your-org/design-system';

// Basic input
<Input placeholder="Enter your name" />

// Input with label
<Input
  label="Email Address"
  type="email"
  placeholder="example@domain.com"
/>

// Required input
<Input
  label="Username"
  required
  placeholder="Choose a username"
/>

// Disabled input
<Input
  label="Readonly field"
  disabled
  value="This value cannot be changed"
/>

// Input with event handler
<Input
  label="Search"
  type="search"
  placeholder="Search..."
  onChange={(e) => {
    console.log('Search term:', e.target.value);
  }}
/>
```

## Accessibility Considerations

### Keyboard Navigation

All interactive elements in this design system can be accessed and operated using a keyboard:

- `Tab`: Move focus to the next interactive element
- `Shift + Tab`: Move focus to the previous interactive element
- `Space` or `Enter`: Activate buttons when focused
- `Escape`: Close modals, popups, or cancel current action

### Screen Readers

Components include proper ARIA attributes to ensure screen reader compatibility:

- Buttons have meaningful labels
- Inputs are associated with their labels
- Required fields are properly marked
- Error messages are announced appropriately

## Best Practices

1. Always provide labels for form inputs
2. Use clear and concise button text
3. Follow color contrast guidelines (WCAG 2.1 AA)
4. Test your interface with keyboard-only navigation
5. Ensure all interactive elements have appropriate focus states
