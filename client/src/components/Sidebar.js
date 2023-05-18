import React from "react";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import {
  SettingsOutlined,
  ChevronLeftOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  PieChartOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMouthOutlined,
  AdminPanelSettingsOutlined,
  TrendingChartOutlined,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FlexBetween } from "./FlexBetween";
import profileImage from "assets/profile.jpeg";

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(""); //what page we are currently on

  const theme = useTheme();

  const navigate = useNavigate();

  //any time url changes active is set to url

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          width="drawerWidth"
        />
      )}
    </Box>
  );
};

export default Sidebar;
