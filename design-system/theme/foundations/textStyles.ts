const headingsBase = {
  fontFamily: 'Circular',
  fontWeight: 'bold',
  lineHeight: '125%',
};

const bodyBase = {
  lineHeight: '120%',
};

const largeBodyBase = {
  ...bodyBase,
  fontSize: '18px',
};

const normalBodyBase = {
  ...bodyBase,
  fontSize: '16px',
};

const smallBodyBase = {
  ...bodyBase,
  fontSize: '14px',
};
const extraSmallBodyBase = {
  ...bodyBase,
  fontSize: '12px',
};

const textStyles = {
  display1: {
    fontSize: '64px',
    ...headingsBase,
  },
  display2: {
    fontSize: '56px',
    ...headingsBase,
    fontWeight: 'normal',
  },
  h1Headline: {
    fontSize: { base: '28px', laptop: '32px', laptopL: '36px' },
    ...headingsBase,
  },
  h2Headline: {
    fontSize: '32px',
    ...headingsBase,
  },
  h3Headline: {
    fontSize: '28px',
    ...headingsBase,
  },
  h4Headline: {
    fontSize: '24px',
    ...headingsBase,
  },
  h5Headline: {
    fontSize: '21px',
    ...headingsBase,
  },
  h6Headline: {
    fontSize: '18px',
    ...headingsBase,
  },
  largeBody: {
    ...largeBodyBase,
    fontWeight: 'normal',
  },
  largeBodyUnderline: {
    ...largeBodyBase,
    fontWeight: 'normal',
    textDecoration: 'underline',
  },
  largeBodyItalic: {
    ...largeBodyBase,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  largeBodyItalicUnderline: {
    ...largeBodyBase,
    fontWeight: 'normal',
    textDecoration: 'underline',
    fontStyle: 'italic',
  },
  largeBodyMedium: {
    ...largeBodyBase,
    fontWeight: 500,
  },
  largeBodyMediumUnderline: {
    ...largeBodyBase,
    fontWeight: 500,
    textDecoration: 'underline',
  },
  largeBodyBold: {
    ...largeBodyBase,
    fontWeight: 'bold',
  },
  largeBodyBoldUnderline: {
    ...largeBodyBase,
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  normalBody: {
    ...normalBodyBase,
    fontWeight: 'normal',
  },
  normalBodyUnderline: {
    ...normalBodyBase,
    fontWeight: 'normal',
    textDecoration: 'underline',
  },
  normalBodyItalic: {
    ...normalBodyBase,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  normalBodyItalicUnderline: {
    ...normalBodyBase,
    fontWeight: 'normal',
    textDecoration: 'underline',
    fontStyle: 'italic',
  },
  normalBodyMedium: {
    ...normalBodyBase,
    fontWeight: 500,
  },
  normalBodyMediumUnderline: {
    ...normalBodyBase,
    fontWeight: 500,
    textDecoration: 'underline',
  },
  normalBodyBold: {
    ...normalBodyBase,
    fontWeight: 'bold',
  },
  normalBodyBoldUnderline: {
    ...normalBodyBase,
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  smallBody: {
    ...smallBodyBase,
    fontWeight: 'normal',
  },
  smallBodyUnderline: {
    ...smallBodyBase,
    fontWeight: 'normal',
    textDecoration: 'underline',
  },
  smallBodyItalic: {
    ...smallBodyBase,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  smallBodyItalicUnderline: {
    ...smallBodyBase,
    fontWeight: 'normal',
    textDecoration: 'underline',
    fontStyle: 'italic',
  },
  smallBodyMedium: {
    ...smallBodyBase,
    fontWeight: 500,
  },
  smallBodyMediumUnderline: {
    ...smallBodyBase,
    fontWeight: 500,
    textDecoration: 'underline',
  },
  smallBodyBold: {
    ...smallBodyBase,
    fontWeight: 'bold',
  },
  smallBodyBoldUnderline: {
    ...smallBodyBase,
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  extraSmallBody: {
    ...extraSmallBodyBase,
    fontWeight: 'normal',
  },
  extraSmallBodyUnderline: {
    ...extraSmallBodyBase,
    fontWeight: 'normal',
    textDecoration: 'underline',
  },
  extraSmallBodyItalic: {
    ...extraSmallBodyBase,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  extraSmallBodyItalicUnderline: {
    ...extraSmallBodyBase,
    fontWeight: 'normal',
    textDecoration: 'underline',
    fontStyle: 'italic',
  },
  extraSmallBodyMedium: {
    ...extraSmallBodyBase,
    fontWeight: 500,
  },
  extraSmallBodyMediumUnderline: {
    ...extraSmallBodyBase,
    fontWeight: 500,
    textDecoration: 'underline',
  },
  extraSmallBodyBold: {
    ...extraSmallBodyBase,
    fontWeight: 'bold',
  },
  extraSmallBodyBoldUnderline: {
    ...extraSmallBodyBase,
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
};

export default textStyles;
