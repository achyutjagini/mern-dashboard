import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";

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

  //get the userId stored in the state/index.js
  const userId = useSelector((state) => state.global.userId) //selects the id variable of user(a huge number)
  //console.log('userid', userId)

  const { data } = useGetUserQuery(userId)


  console.log("data", data)

  useEffect(() => {
    console.log(`Desktop screen ${isNonMobile}`)
  }, [isNonMobile])

  /*
  The usage of display: block in this case means that the Box component will be rendered as a block
  -level element. This means it will take up the entire available width of its parent container and 
  stack vertically, taking up a new line for each element.
  */
  /* flex desktop screen */
  return (
    <Box display={isNonMobile ? "flex" : "block"} maxWidth="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setisSideBarOpen={setisSideBarOpen}
      />
      {/*because of the flexGrow the navbar became full screen* else it was half screen
       flexgrow so it takes all remaining space
      */}
      <Box flexGrow={1}>
        {/* to have functionality of opening and closing sidebar in menu icon*/}
        <Navbar
          user={data || {}}
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
