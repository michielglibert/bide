import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/index.ts";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const withChakra = (StoryFn) => {
	return (
		<ChakraProvider theme={theme}>
			<StoryFn />
		</ChakraProvider>
	);
};

export const decorators = [withChakra];
