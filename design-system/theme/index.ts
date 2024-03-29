import { extendTheme } from "@chakra-ui/react";
import components from "./components";

import fonts from "./foundations/fonts";
import fontSizes from "./foundations/fontSizes";
import lineHeights from "./foundations/lineHeights";
import styles from "./foundations/styles";
import sizes from "./foundations/sizes";
import space from "./foundations/space";
import textStyles from "./foundations/textStyles";
import shadows from "./foundations/shadows";
import breakpoints from "./foundations/breakpoints";
import radii from "./foundations/radii";
import baseColors from "./foundations/baseColors";
import semanticTokens from "./foundations/semanticTokens";

const theme = extendTheme({
  colors: baseColors,
  fonts,
  space,
  sizes,
  lineHeights,
  fontSizes,
  textStyles,
  shadows,
  styles,
  radii,
  components,
  breakpoints,
  semanticTokens,
});

export default theme;
