import { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarPage from "../../modules/dashboard/components/sidebar/SidebarPage";
import Header from "../../modules/dashboard/components/header/Header";
import "./DashboardLayout.css";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="dashboard-container">
      {/* TOP FIXED */}
      <Header toggleSidebar={() => setIsSidebarOpen(true)} />

      {/* LEFT + RIGHT */}
      <div className="dashboard-body">
        <SidebarPage
          isOpen={isSidebarOpen}
          closeSidebar={() => setIsSidebarOpen(false)}
        />

        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
