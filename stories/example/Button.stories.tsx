import React from "react";
import { Meta, Story } from "@storybook/react";

import { Button } from "./Button";
import { VStack } from "@chakra-ui/react";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

export const Primary: Story = ({ children = "Button" }) => {
  return (
    <VStack bg="danger.main">
      <Button variant="primary">{children}</Button>
      <Button variant="secondary">{children}</Button>
      <Button variant="tertiary">{children}</Button>
      <Button variant="ghost">{children}</Button>

      <Button variant="primary" colorScheme="secondary">
        {children}
      </Button>
      <Button variant="secondary" colorScheme="secondary">
        {children}
      </Button>
      <Button variant="tertiary" colorScheme="secondary">
        {children}
      </Button>
      <Button variant="ghost" colorScheme="secondary">
        {children}
      </Button>
    </VStack>
  );
};
