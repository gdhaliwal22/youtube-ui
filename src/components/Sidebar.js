import React from "react";
import "../css/Sidebar.css";
import SidebarRow from "../components/SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>I am Sidebar </h1>
      <SidebarRow title="Home" />
      <SidebarRow title="Trending" />
      <SidebarRow title="Subscription" />
      {/* <SidebarRow title="" />
      <SidebarRow title="" />
      <SidebarRow title="" /> */}
    </div>
  );
}

export default Sidebar;
