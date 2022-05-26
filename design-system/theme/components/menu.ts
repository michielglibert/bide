const baseStyle = {
  list: {
    p: 2,
    border: '1px solid',
    borderColor: 'gray.50',
    boxShadow: 'level4',
  },
  item: {
    borderRadius: 'md',
    color: 'gray.500',
    p: 2,
    transition: 'color .2s, background .2s',
    _hover: {
      color: 'black',
      background: 'gray.ultraLight',
    },
    _focus: {
      background: 'none',
    },
  },
};

const Menu = {
  baseStyle,
};

export default Menu;
