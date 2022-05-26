import { Divider, SimpleGrid, Text, VStack } from "@bide";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Foundation/TextStyles/Font",
} as Meta;

export const Font: Story = () => {
  return (
    <VStack spacing="2" align="flex-start" maxW="2xl">
      <Text as="h1" textStyle="h1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>

      <Text textStyle="normalBodyBold">
        Morbi at mollis nisl. Suspendisse dolor metus, elementum id nulla non,
        dignissim tristique mi. Nunc hendrerit est et fermentum porttitor.
        Vivamus vitae ipsum eros.
      </Text>

      <Text>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Suspendisse potenti. Donec iaculis tincidunt
        euismod. Morbi bibendum enim sed lacinia volutpat. Nunc magna nunc,
        sodales ut libero sed, malesuada vehicula nibh. Nulla ac nisl at ipsum
        lobortis vulputate. Nullam tempor id dolor a condimentum. Donec at metus
        porta, ornare risus vel, commodo risus.
      </Text>

      <Text>
        Proin ut auctor leo, non cursus velit. Sed at iaculis metus. In aliquet
        leo at enim vehicula aliquam. Nam porta felis in quam dignissim
        fermentum ac sed ante. Donec non est sit amet neque cursus fermentum sit
        amet eget nisl. Nullam a augue laoreet, cursus nulla at, interdum diam.
        Donec gravida egestas nunc. Praesent eros nunc, ultrices et dignissim
        eu, euismod eu erat. Pellentesque justo mi, volutpat eu efficitur in,
        semper eget erat. Maecenas interdum pretium ante, eu fermentum ante
        varius quis. Pellentesque lobortis dolor non consectetur faucibus. Proin
        nulla nisl, posuere vel purus maximus, feugiat auctor lectus. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Pellentesque
        tristique magna lectus, eu ultricies purus feugiat eget. Mauris sed
        volutpat ipsum, et tristique est.
      </Text>

      <Text>
        Curabitur tempus ornare mi, ac semper nisl sollicitudin vitae. Sed non
        ante ipsum. Suspendisse maximus condimentum eros id finibus. Donec in
        nulla ultrices, tempus magna id, porttitor lectus. Sed auctor eu odio a
        tincidunt. Mauris sed aliquet risus. In commodo bibendum lorem, quis
        auctor velit scelerisque vitae.
      </Text>

      <Text textStyle="normalBodyItalic">
        a dolor Maximus Faucibus sed vitae odio.
      </Text>
    </VStack>
  );
};
