import { Button as ChakraButton, ButtonProps } from "@bide";
import React from "react";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  ...props
}: ButtonProps) => (
  <ChakraButton variant="outline" {...props}>
    {children}
  </ChakraButton>
);
