import { extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react';

const fontFamily = `'Lufga', sans-serif`;

const fonts = {
  body: fontFamily,
  heading: fontFamily,
};

const menuBaseStyle = defineStyle({
  list: {
    bg: "white",
    border: 'none',
    shadow: 'md'
  },
  item: {
    color: "var(--text-color)",
    bg: "white",
    _hover: {
      bg: "gray.50",
      color: 'black'
    },
    _focus: {
      bg: "gray.50",
      opacity: '0.8'
    },
    _active: {
      bg: 'gray.50'
    }
  },
});

const components = {
  Input: {
    variants: {
      outline: {
        field: {
          bg: 'transparent',
          color: 'white',
          fontWeight: '400',
          _placeholder: {
            color: 'white',
            fontWeight: '200',
          },
          _focus: {
            boxShadow: 'none',
            outline: 'none',
            borderColor: 'white',
          },
          _invalid: {
            borderColor: 'red.200',
          },
        },
      },
    },
  },
  Table: {
    variants: {
      simple: {
        th: {
          textAlign: 'center',
          padding: '1rem',
          color: '#343A40',
        },
        td: {
          textAlign: 'center',
          whiteSpace: 'nowrap',
          color: '#6C757D',
        },
      },
      pagination: {
        th: {
          textAlign: 'center',
          padding: '1rem',
          color: '#343A40',
          fontWeight: 600,
          borderBottom: '2px solid rgba(223, 223, 223, 1)'
        },
        td: {
          textAlign: 'center',
          color: '#6C757D',
          bg: 'white'
        }
      }
    }
  },
  Button: {
    variants: {
      red: {
        bg: 'var(--red-grad)',
        color: 'white',
        fontSize: '1rem',
        fontWeight: '400',
        _hover: {
          opacity: '0.9',
        },
        _active: {
          opacity: '0.8',
        },
      },
      white: {
        bg: 'white',
        color: 'black',
        fontSize: '1rem',
        fontWeight: '400',
        shadow: 'sm',
        _hover: {
          opacity: '0.8',
          shadow: 'md'
        },
        _active: {
          opacity: '0.9',
          shadow: 'lg'
        }
      }
    },
  },
  Menu: defineStyleConfig({ baseStyle: menuBaseStyle })
};

const colors = {
  blue: {
    500: 'rgba(50, 166, 249, 1)',
  },
  red: {
    500: '#E71B40',
  },
  green: {
    500: '#28A745',
  },
  blackAlpha: {
    500: '#030303',
    600: '#030304DB',
  },
  gray: {
    50: '#6C757D25',
    200: '#898989'
  }
};

const theme = extendTheme({
  fonts,
  colors,
  components,
});

export default theme;
