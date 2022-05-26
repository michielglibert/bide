import { Text, VStack } from "@bide";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Foundation/TextStyles/Heading",
} as Meta;

export const Heading: Story = () => {
  return (
    <VStack align="stretch">
      <Text as="h1" textStyle="h1">
        Heading h1
      </Text>
      <Text as="h2" textStyle="h2">
        Heading h2
      </Text>
      <Text as="h3" textStyle="h3">
        Heading h3
      </Text>
      <Text as="h4" textStyle="h4">
        Heading h4
      </Text>
      <Text as="h5" textStyle="h5">
        Heading h5
      </Text>
      <Text as="h6" textStyle="h6">
        Heading h6
      </Text>
    </VStack>
  );
};
