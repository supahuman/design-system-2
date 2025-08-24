import type { Meta, StoryObj } from "@storybook/react";
// Import the component with .js extension for ESM compatibility
import Input from "./Input.js";

// Define the meta object
const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel"],
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    errorMessage: { control: "text" },
    helpText: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Define stories
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    disabled: true,
    placeholder: "This input is disabled",
  },
};

export const Required: Story = {
  args: {
    label: "Required Input",
    required: true,
    placeholder: "This field is required",
  },
};

export const WithHelpText: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    helpText: "Password must be at least 8 characters long",
  },
};

export const WithError: Story = {
  args: {
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
    value: "invalid-email",
    errorMessage: "Please enter a valid email address",
  },
};

export const FullExample: Story = {
  args: {
    label: "Username",
    required: true,
    placeholder: "Enter your username",
    helpText: "Username must be unique and at least 4 characters",
    "aria-label": "Username input field",
  },
};
