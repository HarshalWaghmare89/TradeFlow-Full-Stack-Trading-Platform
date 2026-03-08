import WatchList from "./WatchList";
import "./SidebarPage.css";

function SidebarPage({ isOpen, closeSidebar }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <WatchList closeSidebar={closeSidebar} />
      </div>
    </>
  );
}

export default SidebarPage;
