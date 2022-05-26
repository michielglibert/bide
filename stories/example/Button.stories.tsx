import React from "react";
import { Meta, Story } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

export const Primary: Story = ({ children = "Button" }) => (
  <Button>{children}</Button>
);
