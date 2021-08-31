import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.100",
        color: "gray.700",
        fontSize: "14px"
      },
      p: {
        fontSize: ".8rem"
      },
      ".optionLable": {
        m: "15px 0 0",
        pb: "5px",
        textAlign: "left",
        borderBottom: "1px solid #edf2f7"
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
})
export default theme;
