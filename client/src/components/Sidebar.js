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
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  PieChartOutlined,
  EqualizerOutlined,
  GroupsOutlined,
  LaptopMacOutlined,
  SickOutlined,
  EngineeringOutlined,
  AccountBalanceOutlined,
  HailOutlined,
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FlexBetween } from "./FlexBetween";
import profileImage from "assets/profile.jpeg";

const Sidebar = ({
  user,
  drawerWidth,
  isSideBarOpen,
  setisSideBarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSideBarOpen && (
        <Drawer
          open={isSideBarOpen}
          onClose={() => setisSideBarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box sx={{ position: 'sticky', top: '0', backgroundColor: theme.palette.background.alt, zIndex: '999' }}>
            <Box m="1rem auto" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
              <FlexBetween display='flex' color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Sidebar
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setisSideBarOpen(!isSideBarOpen)}>
                    <ChevronLeft sx={{ color: theme.palette.secondary.main }} />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <Divider />
          </Box>
        </Drawer>
      )
      }
    </Box >
  );
};

export default Sidebar