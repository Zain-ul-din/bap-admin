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
  }
}

const theme = extendTheme({
  fonts, components
})

export default theme;

