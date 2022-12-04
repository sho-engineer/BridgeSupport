import { Box } from "./Box.js";

export const Layout = ({ children, component }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    {component}
  </Box>
);