import { extendTheme } from "@chakra-ui/react";

const fontFamily = `'Lufga', sans-serif`;

const fonts =  {
  body: fontFamily,
  heading: fontFamily,
}

const components = {
  Input: {
    variants: {
      outline: {
        field: {
          bg: "transparent",
          color: "white",
          fontWeight: '400',
          _placeholder: {
            color: "white",
            fontWeight: '200'
          },
          _focus: {
            boxShadow: 'none',
            outline: "none",
            borderColor: "white",
          },
          _invalid: {
            borderColor: "red.200",
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
          color: '#343A40'
        },
        td: {
          textAlign: 'center',
          whiteSpace: 'nowrap',
          color: '#6C757D'
        }
      }
    }
  }
}

const colors = {
  blue: {
    500: 'rgba(50, 166, 249, 1)'
  },
  red: {
    500: '#E71B40'
  },
  blackAlpha: {
    500: '#030303',
    600: '#030304DB'
  }
}

const theme = extendTheme({
  fonts, colors, components
})

export default theme;

