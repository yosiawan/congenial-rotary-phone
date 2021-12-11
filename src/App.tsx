import { useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

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
        <div className="app-body"></div>
      </div>
    </div>
  );
}

export default App;
