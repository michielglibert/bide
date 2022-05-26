const headingsBase = {
  fontWeight: "bold",
  lineHeight: "125%",
};

const bodyBase = {
  lineHeight: "120%",
};

const largeBodyBase = {
  ...bodyBase,
  fontSize: { base: "16px", laptop: "18px" },
};

const normalBodyBase = {
  ...bodyBase,
  fontSize: { base: "14px", laptop: "16px" },
};

const smallBodyBase = {
  ...bodyBase,
  fontSize: "14px",
};
const extraSmallBodyBase = {
  ...bodyBase,
  fontSize: "12px",
};

const textStyles = {
  // ****************************
  // * Heading
  // ****************************

  h1: {
    fontSize: { base: "28px", laptop: "32px", laptopL: "36px" },
    ...headingsBase,
  },
  h2: {
    fontSize: { base: "24px", laptop: "28px", laptopL: "32px" },
    ...headingsBase,
  },
  h3: {
    fontSize: { base: "21px", laptop: "24px", laptopL: "28px" },
    ...headingsBase,
  },
  h4: {
    fontSize: { base: "18px", laptop: "21px", laptopL: "24px" },
    ...headingsBase,
  },
  h5: {
    fontSize: { base: "18px", laptopL: "21px" },
    ...headingsBase,
  },
  h6: {
    fontSize: "18px",
    ...headingsBase,
  },

  // ****************************
  // * Normal text
  // ****************************

  //LG
  largeBody: {
    ...largeBodyBase,
    fontWeight: "normal",
  },
  largeBodyUnderline: {
    ...largeBodyBase,
    fontWeight: "normal",
    textDecoration: "underline",
  },
  largeBodyItalic: {
    ...largeBodyBase,
    fontWeight: "normal",
    fontStyle: "italic",
  },
  largeBodyItalicUnderline: {
    ...largeBodyBase,
    fontWeight: "normal",
    textDecoration: "underline",
    fontStyle: "italic",
  },
  largeBodyMedium: {
    ...largeBodyBase,
    fontWeight: 500,
  },
  largeBodyMediumUnderline: {
    ...largeBodyBase,
    fontWeight: 500,
    textDecoration: "underline",
  },
  largeBodyBold: {
    ...largeBodyBase,
    fontWeight: "bold",
  },
  largeBodyBoldUnderline: {
    ...largeBodyBase,
    fontWeight: "bold",
    textDecoration: "underline",
  },

  // MD
  normalBody: {
    ...normalBodyBase,
    fontWeight: "normal",
  },
  normalBodyUnderline: {
    ...normalBodyBase,
    fontWeight: "normal",
    textDecoration: "underline",
  },
  normalBodyItalic: {
    ...normalBodyBase,
    fontWeight: "normal",
    fontStyle: "italic",
  },
  normalBodyItalicUnderline: {
    ...normalBodyBase,
    fontWeight: "normal",
    textDecoration: "underline",
    fontStyle: "italic",
  },
  normalBodyMedium: {
    ...normalBodyBase,
    fontWeight: 500,
  },
  normalBodyMediumUnderline: {
    ...normalBodyBase,
    fontWeight: 500,
    textDecoration: "underline",
  },
  normalBodyBold: {
    ...normalBodyBase,
    fontWeight: "bold",
  },
  normalBodyBoldUnderline: {
    ...normalBodyBase,
    fontWeight: "bold",
    textDecoration: "underline",
  },

  // SM
  smallBody: {
    ...smallBodyBase,
    fontWeight: "normal",
  },
  smallBodyUnderline: {
    ...smallBodyBase,
    fontWeight: "normal",
    textDecoration: "underline",
  },
  smallBodyItalic: {
    ...smallBodyBase,
    fontWeight: "normal",
    fontStyle: "italic",
  },
  smallBodyItalicUnderline: {
    ...smallBodyBase,
    fontWeight: "normal",
    textDecoration: "underline",
    fontStyle: "italic",
  },
  smallBodyMedium: {
    ...smallBodyBase,
    fontWeight: 500,
  },
  smallBodyMediumUnderline: {
    ...smallBodyBase,
    fontWeight: 500,
    textDecoration: "underline",
  },
  smallBodyBold: {
    ...smallBodyBase,
    fontWeight: "bold",
  },
  smallBodyBoldUnderline: {
    ...smallBodyBase,
    fontWeight: "bold",
    textDecoration: "underline",
  },

  // XS
  extraSmallBody: {
    ...extraSmallBodyBase,
    fontWeight: "normal",
  },
  extraSmallBodyUnderline: {
    ...extraSmallBodyBase,
    fontWeight: "normal",
    textDecoration: "underline",
  },
  extraSmallBodyItalic: {
    ...extraSmallBodyBase,
    fontWeight: "normal",
    fontStyle: "italic",
  },
  extraSmallBodyItalicUnderline: {
    ...extraSmallBodyBase,
    fontWeight: "normal",
    textDecoration: "underline",
    fontStyle: "italic",
  },
  extraSmallBodyMedium: {
    ...extraSmallBodyBase,
    fontWeight: 500,
  },
  extraSmallBodyMediumUnderline: {
    ...extraSmallBodyBase,
    fontWeight: 500,
    textDecoration: "underline",
  },
  extraSmallBodyBold: {
    ...extraSmallBodyBase,
    fontWeight: "bold",
  },
  extraSmallBodyBoldUnderline: {
    ...extraSmallBodyBase,
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

export default textStyles;
