import { useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import {
  ROUTE_DRIVER_MGMT,
  ROUTE_MENU_A,
  ROUTE_MENU_C,
} from "./constants/routes";
import ComingSoon from "./ComingSoon/ComingSoon";
import Driver from "./Driver/Driver";
import "./App.css";

function App() {
  const [sidebarOpenInMobile, setSidebarOpenInMobile] = useState(false);
  const sidebarToggleHandler = () => {
    setSidebarOpenInMobile(!sidebarOpenInMobile);
  };

  return (
    <div className="fill-parent">
      <Header toggleSidebarHandler={sidebarToggleHandler} />
      <div className="fill-parent" style={{ display: "flex" }}>
        <Sidebar
          isOpenInMobile={sidebarOpenInMobile}
          toggleOpenInMobile={sidebarToggleHandler}
        />
        <div className="app-body">
          <Toolbar />
          <Routes>
            <Route path="/" element={<div>Welcome to Shipper</div>} />
            <Route path={ROUTE_DRIVER_MGMT} element={<Driver />} />
            <Route path={ROUTE_MENU_A} element={<ComingSoon />} />
            <Route path={ROUTE_MENU_C} element={<ComingSoon />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
