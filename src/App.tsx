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
import Placeholder from "./Placeholder/Placeholder";
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
            <Route path="/" element={<Placeholder text="Welcome" />} />
            <Route path={ROUTE_DRIVER_MGMT} element={<Driver />} />
            <Route
              path={ROUTE_MENU_A}
              element={<Placeholder text="Coming Soon" />}
            />
            <Route
              path={ROUTE_MENU_C}
              element={<Placeholder text="Coming Soon" />}
            />
            <Route path="*" element={<Placeholder text="Page Not Found" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
