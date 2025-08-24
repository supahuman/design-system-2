import * as React from 'react';
import styles from './Input.module.css';

/**
 * Input props interface extending standard HTML input attributes
 * @interface InputProps
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional label for the input */
  label?: string;
  /** Error message to display and set aria-invalid */
  errorMessage?: string;
  /** Help text for the input (adds aria-describedby) */
  helpText?: string;
  /** Whether the field is required (adds aria-required) */
  required?: boolean;
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
const Input = ({
  label,
  id,
  'aria-label': ariaLabel,
  errorMessage,
  helpText,
  required,
  ...props
}: InputProps) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  const helpTextId = helpText ? `${inputId}-help` : undefined;
  const errorId = errorMessage ? `${inputId}-error` : undefined;

  // Create a describedby value if we have help text or error message
  const describedBy = [helpTextId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              {' '}
              *
            </span>
          )}
        </label>
      )}
      <input
        id={inputId}
        className={`${styles.input} ${errorMessage ? styles.inputError : ''}`}
        aria-label={ariaLabel || label || 'Input field'}
        aria-invalid={errorMessage ? 'true' : undefined}
        aria-describedby={describedBy}
        aria-required={required ? 'true' : undefined}
        {...props}
      />
      {helpText && (
        <div id={helpTextId} className={styles.helpText}>
          {helpText}
        </div>
      )}
      {errorMessage && (
        <div id={errorId} className={styles.errorMessage} role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Input;
