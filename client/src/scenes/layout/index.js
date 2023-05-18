import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

/*


      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setisSideBarOpen={setisSideBarOpen}
      />

    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">

*/

/*Navbar exist on every page
outlet is what is underneath */
const Layout = () => {
  /* mobile-false desktop-true*/

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSideBarOpen, setisSideBarOpen] = useState(true);

  useEffect(() => {
    console.log(`Desktop screen ${isNonMobile}`)
  }, [isNonMobile])

  useEffect(() => {
    console.log(`Layout file${isSideBarOpen}`)
  }, [isSideBarOpen]);

  /* flex desktop screen */
  return (
    <Box display={isNonMobile ? "flex" : "block"} maxWidth="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setisSideBarOpen={setisSideBarOpen}
      />
      {/*because of the flexGrow the navbar became full screen* else it was half screen*/}
      <Box flexGrow={1}>
        {/* to have functionality of opening and closing sidebar in menu icon*/}
        <Navbar
          isSideBarOpen={isSideBarOpen}
          setisSideBarOpen={setisSideBarOpen}
          sx={{ position: 'sticky', top: '0' }}
        />
        <Outlet />
      </Box>
    </Box >

  );
};

export default Layout;
