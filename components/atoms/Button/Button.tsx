import * as React from "react";
import styles from "./Button.module.css";

/**
 * Button props interface
 * @interface ButtonProps
 */
export interface ButtonProps {
  /** The content to be displayed within the button */
  children: React.ReactNode;
  /** The visual style variant of the button */
  variant?: "primary" | "secondary";
  /** The size of the button */
  size?: "small" | "medium" | "large";
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Handler called when the button is clicked */
  onClick?: () => void;
  /** Indicates if the button is a toggle button (changes aria-pressed behavior) */
  isToggle?: boolean;
  /** Current pressed state for toggle buttons */
  pressed?: boolean;
  /** Accessible label for the button (important for icon-only buttons) */
  ariaLabel?: string;
}

/**
 * Button component - A versatile button component that supports different variants
 *
 * @component
 * @example
 * ```tsx
 * <Button variant="primary" onClick={() => console.log('clicked')}>
 *   Click Me
 * </Button>
 * ```
 */
const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  isToggle = false,
  pressed = false,
  ariaLabel,
}: ButtonProps) => (
  <button
    className={`${styles[variant]} ${size && styles[size]}`}
    onClick={onClick}
    // Only include aria-pressed for toggle buttons
    {...(isToggle && { "aria-pressed": pressed })}
    // Include aria-label when provided (especially important for icon-only buttons)
    {...(ariaLabel && { "aria-label": ariaLabel })}
    disabled={disabled}
    // Add focus visibility for keyboard navigation
    data-focus-visible-added
  >
    {children}
  </button>
);
export default Button;
