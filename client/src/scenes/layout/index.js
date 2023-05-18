import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

/*Navbar exist on every page
outlet is what is underneath */
const Layout = () => {
  /* mobile-false desktop-true*/

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSideBarOpen, setisSideBarOpen] = useState(true);

  /* flex desktop screen */
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">

      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setisSideBarOpen={setisSideBarOpen}
      />


      <Box>
        {/* to have functionality of opening and closing sidebar in menu icon*/}
        <Navbar
          isSideBarOpen={isSideBarOpen}
          setisSideBarOpen={setisSideBarOpen}
        />
        <Outlet />
      </Box>
    </Box>

  );
};

export default Layout;
