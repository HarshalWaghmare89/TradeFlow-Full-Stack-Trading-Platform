import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function MainLayout({ showHeader = true, showFooter = true }) {
  const location = useLocation();
  const isSupportPage = location.pathname === "/support";

  return (
    <>
      {showHeader && <Header isfixed={isSupportPage} />}
      <main>
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </>
  );
}

export default MainLayout;
