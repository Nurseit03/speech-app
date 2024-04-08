import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Header title="Голосовой блокнот"/>
      <Box component="main" style={{ width: "100%" }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
