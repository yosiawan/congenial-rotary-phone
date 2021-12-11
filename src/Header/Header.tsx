import "./header.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import shipperLogo from "../assets/shpr-logo.png";

type THeaderProps = {
  toggleSidebarHandler: () => void;
};
export default function Header(props: THeaderProps) {
  return (
    <AppBar elevation={0} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <IconButton
            onClick={props.toggleSidebarHandler}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            style={{ margin: "auto 5px", maxHeight: 30 }}
            src={shipperLogo}
            alt="Shipper's Logo"
            title="Shipper"
          />
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto 10px" }}>
              Hello, <span style={{ color: "red" }}>Shipper User</span>
            </div>
            <AccountCircle />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
