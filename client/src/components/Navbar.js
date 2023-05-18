import React from "react";
import { useState, useEffect } from "react";

import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";

import { FlexBetween } from "components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import { ProfileImage } from "assets/profile.jpeg";
import { InputBase, useTheme } from "@mui/material";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

const Navbar = ({ isSideBarOpen, setisSideBarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    console.log(`Navbar file${isSideBarOpen}`)
  }, [isSideBarOpen]);
  return (
    <AppBar position="static" background="none" boxshadow="none">

      {/*toolbar has the black color*/}
      <Toolbar sx={{ justifyContent: "space-between" }}>

        {/*left side */}
        <FlexBetween>
          {/*the iconbutton is the circle*/}
          <IconButton
            aria-label=""
            onClick={() => {
              console.log("open/close sidebar")
              setisSideBarOpen(!isSideBarOpen)
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* gap should be used on parent component*/}
          {/*the cylinder that contains search */}
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search...."></InputBase>

            {/*the circle around the search is IconButton */}
            <IconButton>
              <Search />
            </IconButton>

          </FlexBetween> {/*close the inner rounded flexbox*/}
        </FlexBetween>

        {/*right side*/}

        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>

            {/* render the icon depending on the mode */}
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}

          </IconButton>
          <IconButton>
            <SettingsOutlined></SettingsOutlined>
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
