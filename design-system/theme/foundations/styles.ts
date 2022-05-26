const styles = {
  global: {
    // We need to override these defaults by Chakra
    // https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/styles.ts#L5
    body: {
      fontFamily: "'Circular','Helvetica','Myriad',sans-serif",
      lineHeight: '120%',
    },
    input: {
      color: 'black',
    },
    a: {
      color: 'primary.main',
    },
  },
};

export default styles;
