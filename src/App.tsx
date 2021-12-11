import { useState } from "react";
import Header from "./Header/Header";

function App() {
  const [sidebarOpenInMobile, setSidebarOpenInMobile] = useState(false);
  const sidebarToggleHandler = () => {
    setSidebarOpenInMobile(!sidebarOpenInMobile);
  };

  return (
    <div className="fill-parent">
      <Header toggleSidebarHandler={sidebarToggleHandler} />
    </div>
  );
}

export default App;
