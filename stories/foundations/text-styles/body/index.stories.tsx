import { Divider, SimpleGrid, Text, VStack } from "@bide";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Foundation/TextStyles/Body",
} as Meta;

const textSizes = ["large", "normal", "small", "extraSmall"];

export const Primary: Story = () => {
  return (
    <SimpleGrid columns={{ base: 1, laptop: 2 }} gap="4" boxShadow="base">
      {textSizes.map((size) => {
        return (
          <VStack border="1px" p="2">
            <Text mt="2">{size}</Text>
            <Divider my="2" />
            <Text textStyle={`${size}Body`}>{`${size}Body`}</Text>
            <Text
              textStyle={`${size}BodyUnderline`}
            >{`${size}BodyUnderline`}</Text>
            <Text textStyle={`${size}BodyItalic`}>{`${size}BodyItalic`}</Text>
            <Text
              textStyle={`${size}BodyItalicUnderline`}
            >{`${size}BodyItalicUnderline`}</Text>
            <Text textStyle={`${size}BodyMedium`}>{`${size}BodyMedium`}</Text>
            <Text
              textStyle={`${size}BodyMediumUnderline`}
            >{`${size}BodyMediumUnderline`}</Text>
            <Text textStyle={`${size}BodyBold`}>{`${size}BodyBold`}</Text>
            <Text
              textStyle={`${size}BodyUnderline`}
            >{`${size}BodyUnderline`}</Text>
          </VStack>
        );
      })}
    </SimpleGrid>
  );
};
