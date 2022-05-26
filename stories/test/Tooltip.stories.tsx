import { Meta, Story } from "@storybook/react";
import { Box, Tooltip } from "@bide";

export default {
  title: "Test/Tooltip",
  component: Tooltip,
} as Meta;

export const Primary: Story = () => (
  <Tooltip label="tooltip text">
    <Box h="4" w="4" bg="red">
      ?
    </Box>
  </Tooltip>
);
