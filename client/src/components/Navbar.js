import React from "react";
import { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";

import { FlexBetween } from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "state";
import { ProfileImage } from "assets/profile.jpeg";
import { InputBase, useTheme } from "@mui/material";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar position="static" background="none" boxshadow="none">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/*left side */}
        <FlexBetween>
          {/*the iconbutton is the circle*/}
          <IconButton
            aria-label=""
            onClick={() => console.log("open/close sidebar")}
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
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/*right side*/}

        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
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
