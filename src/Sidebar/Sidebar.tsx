import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import {
  ROUTE_DRIVER_MGMT,
  ROUTE_MENU_A,
  ROUTE_MENU_C,
} from "../constants/routes";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const drawerWidth = 300;

type TSidebarItem = {
  title: string;
  route: string;
  icon: any;
};
const sidebarItems: TSidebarItem[] = [
  {
    title: "Menu A",
    route: ROUTE_MENU_A,
    icon: <HomeIcon />,
  },
  {
    title: "Driver Management",
    route: ROUTE_DRIVER_MGMT,
    icon: <AccountCircle />,
  },
  {
    title: "Menu C",
    route: ROUTE_MENU_C,
    icon: <CalendarTodayIcon />,
  },
];

type TSidebarProps = {
  isOpenInMobile: boolean;
  toggleOpenInMobile: () => void;
};

export default function Sidebar(props: TSidebarProps) {
  const navigate = useNavigate();

  const container =
    window !== undefined ? () => window.document.body : undefined;

  function isItemActive(item: TSidebarItem) {
    return window.location.pathname.split("/")[1] === item.route;
  }

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={props.isOpenInMobile}
        onClose={props.toggleOpenInMobile}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar />
        {sidebarItems.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => navigate(item.route)}
              className={isItemActive(item) ? "active" : "inactive"}
              style={{ padding: 10 }}
            >
              <div style={{ display: "flex" }}>
                <div>{item.icon}</div>
                <div>{item.title}</div>
              </div>
            </div>
          );
        })}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        <Toolbar />
        {sidebarItems.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => navigate(item.route)}
              className={isItemActive(item) ? "active" : "inactive"}
              style={{ padding: 10 }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <div>{item.icon}</div>
                <div>{item.title}</div>
              </div>
            </div>
          );
        })}
      </Drawer>
    </Box>
  );
}
