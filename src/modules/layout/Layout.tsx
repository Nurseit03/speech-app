import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
// import Header from "";
// import Footer from "";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      {/* <Header /> */}
      <Box component="main" style={{ width: "100%", margin: "0 auto" }}>
        {children}
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
