import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    let clickCalled = false;
    const handleClick = () => {
      clickCalled = true;
    };
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(clickCalled).toBe(true);
  });

  it("applies primary variant styles by default", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button.className).toContain("primary");
  });

  it("applies secondary variant styles when specified", () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button.className).toContain("secondary");
  });
});
