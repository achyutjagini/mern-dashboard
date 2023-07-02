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
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FlexBetween } from "./FlexBetween";
import profileImage from "assets/profile.jpeg";


const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];


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
    <Box component="nav" >
      {isSideBarOpen && (
        <Drawer
          open={isSideBarOpen}
          onClose={() => setisSideBarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            /*  background: "yellow",*/
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },

          }}>

          {/*top part container before the line underneath change backgroundColor and see*/}
          <Box sx={{ position: 'sticky', top: '0', backgroundColor: 'theme.palette.background.alt', zIndex: '999' }}>

            {/*the whole horizontal part remove the justify,m prop and see*/}

            {/*this box closed after heading part*/}
            <Box m="1rem auto" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
              {/*flexbetween makes border rounded*/}
              <FlexBetween display='flex' color={theme.palette.secondary.main} borderRadius="9px" >


                {/*  <Box display="flex" alignItems="center" gap="0.5rem" >*/}
                {/*typography is Sidebar word*/}
                <Typography variant="h4" fontWeight="bold">
                  ECOMVISION
                </Typography>
                {/*   </Box> */}

                {!isNonMobile && (
                  <IconButton onClick={() => setisSideBarOpen(!isSideBarOpen)}>
                    <ChevronLeft sx={{ color: theme.palette.secondary.main }} />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>

            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                {/* remove padding of listitem*/ }
                return (

                  < ListItem key={text} disablePadding >

                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>

                      {/*the text like dashboard,products*/}
                      <ListItemText primary={text} />

                      {/*conditional rendering of a chevronRight in case it's the current path*/}
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}

                    </ListItemButton>
                  </ListItem>
                );
              })}

            </List>
            {/*list completed*/}
            <Divider />
          </Box>

          {/*This will position the content of the Box component 2 rem from the bottom of its containing element.*/}
          {/*comment upper /box and below box  see what happens to understand*/}


          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem" borderRadius="9px">

              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />

              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>

                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>

              </Box>

              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box>



        </Drawer>
      )
      }
    </Box >
  );
};

export default Sidebar