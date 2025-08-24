import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

/**
 * Button props interface
 * @interface ButtonProps
 */
interface ButtonProps {
    /** The content to be displayed within the button */
    children: React.ReactNode;
    /** The visual style variant of the button */
    variant?: "primary" | "secondary";
    /** Handler called when the button is clicked */
    onClick?: () => void;
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
declare const Button: ({ children, variant, onClick }: ButtonProps) => react_jsx_runtime.JSX.Element;

/**
 * Input props interface extending standard HTML input attributes
 * @interface InputProps
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Optional label for the input */
    label?: string;
}
/**
 * Input component - A form input with optional label
 *
 * @component
 * @example
 * ```tsx
 * <Input
 *   label="Email Address"
 *   type="email"
 *   placeholder="Enter your email"
 *   onChange={(e) => handleChange(e.target.value)}
 * />
 * ```
 */
declare const Input: ({ label, id, "aria-label": ariaLabel, ...props }: InputProps) => react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, Input, type InputProps };
