import { extendTheme } from "@chakra-ui/react";
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
import components from "./components";

const theme = extendTheme({
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
});

export default theme;
