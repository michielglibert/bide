import { mode } from "@chakra-ui/theme-tools";

const Button = {
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "md",
    _disabled: {
      opacity: 1,
      bg: "gray.strokeAndBg",
      color: "gray.300",
    },
  },
  variants: {
    primary: ({ colorScheme: c }: any) => ({
      bg: `${c}.500`,
      color: "white",
      _hover: {
        bg: `${c}.600`,
        _disabled: {
          bg: "gray.strokeAndBg",
        },
      },
    }),

    secondary: ({ colorScheme: c }: any) => ({
      bg: `${c}.50`,
      color: `${c}.500`,
      _hover: {
        bg: `${c}.100`,
        _disabled: {
          bg: "gray.strokeAndBg",
        },
      },
    }),

    tertiary: ({ colorScheme: c }: any) => ({
      bg: "transparent",
      color: `${c}.500`,
      border: "1px solid",
      borderColor: `${c}.500`,
      _disabled: {
        bg: "transparent",
        borderColor: "gray.strokeAndBg",
      },
      _hover: {
        bg: `${c}.100`,
      },
    }),

    ghost: ({ colorScheme: c }: any) => ({
      color: `${c}.500`,
      _hover: {
        bg: `${c}.100`,
        color: `${c}.500`,
      },
      _disabled: {
        bg: "transparent",
        color: "gray.300",
        border: "none",
      },
    }),

    grayed: {
      bg: "gray.100",
      color: "gray.300",
      _hover: {
        bg: "gray.100",
        color: "gray.400",
        _disabled: {
          bg: "gray.strokeAndBg",
          color: "gray.300",
        },
      },
    },
    grayedGhost: {
      color: "text.gray",
      _hover: {
        bg: "gray.100",
      },
      _disabled: {
        bg: "transparent",
        color: "gray.300",
        border: "none",
      },
    },
  },
  defaultProps: {
    colorScheme: "primary",
    variant: "primary",
  },
};

export default Button;
