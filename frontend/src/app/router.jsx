import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../shared/layouts/MainLayout";
import MetaWrapper from "../shared/meta/MetaWrapper";
import { PAGE_TITLES } from "../shared/meta/pageTitles";

import HomePage from "../modules/landingPages/home/HomePage";
import ProductPage from "../modules/landingPages/product/ProductPage";
import PricingPage from "../modules/landingPages/pricing/PricingPage";
import Aboutpage from "../modules/landingPages/about/AboutPage";
import SupportPage from "../modules/landingPages/support/SupportPage";
import SignupPage from "../modules/auth/pages/signup/SignupPage";
import NotFoundPage from "../shared/components/notFoundPage/NotFoundPage";

import ProtectedRoute from "../shared/components/protectedRoute/ProtectedRoute";
import GeneralContextComponent from "../modules/dashboard/components/actionWindow/GeneralContext";
import DashboardLayout from "../shared/layouts/DashboardLayout";
import DashboardHomePage from "../modules/dashboard/pages/dashboardHome/DashboardHomePage";
import OrdersPage from "../modules/dashboard/pages/orders/OrdersPage";
import HoldingsPage from "../modules/dashboard/pages/holdings/HoldingsPage";
import PositionsPage from "../modules/dashboard/pages/positions/PositionsPage";
import BidsPage from "../modules/dashboard/pages/bids/BidsPage";
import FundsPage from "../modules/dashboard/pages/funds/FundsPage";
import NotFoundPageDashboard from "../modules/dashboard/components/notFoundPage/NotFoundPageDashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <MetaWrapper title={PAGE_TITLES.HOME} element={<HomePage />} />
            }
          />

          <Route
            path="/products"
            element={
              <MetaWrapper
                title={PAGE_TITLES.PRODUCTS}
                element={<ProductPage />}
              />
            }
          />

          <Route
            path="/pricing"
            element={
              <MetaWrapper
                title={PAGE_TITLES.PRICING}
                element={<PricingPage />}
              />
            }
          />

          <Route
            path="/about"
            element={
              <MetaWrapper title={PAGE_TITLES.ABOUT} element={<Aboutpage />} />
            }
          />

          <Route
            path="/support"
            element={
              <MetaWrapper
                title={PAGE_TITLES.SUPPORT}
                element={<SupportPage />}
              />
            }
          />

          <Route
            path="/open-account"
            element={
              <MetaWrapper
                title={PAGE_TITLES.REGISTER}
                element={<SignupPage />}
              />
            }
          />

          <Route
            path="*"
            element={
              <MetaWrapper
                title={PAGE_TITLES.NOT_FOUND}
                element={<NotFoundPage />}
              />
            }
          />
        </Route>

        {/*--------- Dashboard routes ---------------*/}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <GeneralContextComponent>
                <DashboardLayout />
              </GeneralContextComponent>
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <MetaWrapper
                title={PAGE_TITLES.DASHBOARD}
                element={<DashboardHomePage />}
              />
            }
          />
          <Route
            path="orders"
            element={
              <MetaWrapper
                title={PAGE_TITLES.ORDERS}
                element={<OrdersPage />}
              />
            }
          ></Route>
          <Route
            path="holdings"
            element={
              <MetaWrapper
                title={PAGE_TITLES.HOLDINGS}
                element={<HoldingsPage />}
              />
            }
          />
          <Route
            path="positions"
            element={
              <MetaWrapper
                title={PAGE_TITLES.POSITIONS}
                element={<PositionsPage />}
              />
            }
          ></Route>
          <Route
            path="bids"
            element={
              <MetaWrapper title={PAGE_TITLES.BIDS} element={<BidsPage />} />
            }
          ></Route>
          <Route
            path="funds"
            element={
              <MetaWrapper title={PAGE_TITLES.FUNDS} element={<FundsPage />} />
            }
          ></Route>
        </Route>

        <Route
          path="/dashboard/*"
          element={
            <MetaWrapper
              title={PAGE_TITLES.NOT_FOUND}
              element={<NotFoundPageDashboard />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
