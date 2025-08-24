import type { Meta, StoryObj } from "@storybook/react";
// Import the component with .js extension for ESM compatibility
import Button from "./Button.js";

// Define the meta object
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
    onClick: { action: "clicked" },
    isToggle: { control: "boolean" },
    pressed: { control: "boolean" },
    ariaLabel: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};

export const ToggleButton: Story = {
  args: {
    children: "Toggle Button",
    isToggle: true,
    pressed: false,
  },
};

export const IconOnlyButton: Story = {
  args: {
    children: "📁",
    ariaLabel: "Open file",
    size: "small",
  },
};
