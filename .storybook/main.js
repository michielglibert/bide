const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../design-system/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@bide",
            replacement: path.resolve(__dirname, "../design-system"),
          },
          {
            find: "@typings",
            replacement: path.resolve(__dirname, "../types"),
          },
        ],
      },
    };
  },
};
