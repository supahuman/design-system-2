import tokens from './tokens.json' with { type: 'json' };

// Re-export the tokens for easy access
export const colors = tokens.colors;
export const spacing = tokens.spacing;
export const typography = tokens.typography;

// Export the entire tokens object as default
export default tokens;

// Import CSS variables into your project
// This import doesn't return anything but includes the CSS file in your bundle
import './theme.css';
