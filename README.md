# <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1770637909/Logo_tabBar_kxomwa.png" alt="TradeFlow Logo" width="45"> TradeFlow - Full Stack Trading Platform

**TradeFlow** is a modern **full-stack trading platform** that simulates a **real-world stock trading experience**. Users can **execute trades**, **manage portfolios**, and track **orders, holdings, positions, bids, and funds**, while enjoying a **responsive user interface**, **secure backend architecture**, and **efficient trade execution**.

---

### 📖 Table of Contents

- 📈 [Overview](#overview)
- 🎥 [Demo Video](#demo-video)
- 🌐 [Live Demo](#live-demo)
- 🚀 [Features](#features)
- 🛠️ [Tech Stack](#tech-stack)
- 📂 [Project Architecture](#project-architecture)
- 📡 [API Endpoints](#api-endpoints)
- 📌 [Usage](#usage)
- 👤 [Demo User](#demo-user)
- 🔧 [Local Setup for Developers](#local-setup-for-developers)
- 🔬 [Testing](#testing)
- 👨‍💻 [Developer](#developer)

---

# Overview

**TradeFlow** is a **fully responsive, full-stack trading platform** that delivers a **realistic, real-time stock market simulation**. It enables users to **buy and sell assets**, **monitor investments**, and **track orders, holdings, positions, bids, and funds** through an **intuitive and interactive dashboard**. Users can also enjoy **advanced search and filtering**, **light and dark themes**, and **visual analytics with charts and heatmaps**.

The platform incorporates **secure authentication and authorization** with a **modular architecture**, reflecting **professional-grade FinTech design principles**.

> 📈 _Built with the **MERN stack**, TradeFlow demonstrates scalable architecture, efficient trade execution, and a seamless user experience._

---

# Demo Video

#### 🎥 Watch the full demo video: Coming soon

---

# Live Demo

#### 🌐 Access TradeFlow live here: [Visit TradeFlow](https://tradeflow-pro.vercel.app)

---

# Features

- 📊 **Portfolio Management**
  - Track and manage holdings, positions, and portfolio values through a structured trading dashboard.

- 💹 **Trade Execution**
  - Execute BUY and SELL trades that automatically update orders, holdings, and positions.

- 📝 **Orders Management**
  - Create and monitor trading orders with details such as instrument, exchange, quantity, and price.

- 🏦 **Funds Management**
  - Manage available trading funds, including equity and commodity balances.

- 🎯 **Bids System**
  - Maintain auction-style bids from holdings with real-time profit/loss tracking.

- 🔍 **Interactive Search & Watchlist**
  - Quickly search stocks and perform instant actions like Buy, Sell, or Delete directly from the watchlist.

- 🔐 **Secure Authentication**
  - Authenticate users securely using JWT tokens and bcrypt for password hashing.

- 🖥 **Responsive User Interface**
  - Fully responsive and works seamlessly across all devices.

- 🌗 **Light & Dark Themes**
  - Switch between light and dark modes for a comfortable trading experience.

- 📈 **Visual Analytics**
  - Analyze portfolio and market trends using charts and heatmaps.

- ⚠️ **Error Handling**
  - Robust error handling ensures invalid requests and broken routes are handled gracefully.

---

# Tech Stack

### 💻 Frontend

- **React**
  - Builds a dynamic and interactive frontend.

- **React Router**
  - Handles client-side routing and smooth navigation between pages.

- **Axios**
  - Performs API requests to fetch and manage trading data.

- **Bootstrap**
  - Ensures a fully responsive and mobile-friendly UI.

- **Recharts**
  - Renders charts and graphs for portfolio and market visualization.

- **React Helmet Async**
  - Dynamically manages page titles and meta tags for SEO and usability.

- **Context API**
  - Manages global state across the React application.

- **Vanilla CSS (with CSS Variables)**
  - Scalable, maintainable, and reusable styles.

### 🖥 Backend

- **Node.js**
  - Provides a scalable backend runtime environment.

- **Express.js**
  - Handles routing, middleware, and RESTful API endpoints.

- **CORS (Cross-Origin Resource Sharing)**
  - Allows secure resource sharing between frontend and backend.

- **Server-Side Validation (Joi)**
  - Ensures data integrity and prevents invalid requests with schema validation.

### 🗄 Database

- **MongoDB**
  - Stores user portfolios, orders, and market data efficiently.

- **Mongoose**
  - Object Data Modeling (ODM) for MongoDB with schema validation.

### 🔒 Security

- **JWT Authentication**
  - Secures user authentication and protects API routes.

- **bcrypt password hashing**
  - Encrypts user passwords for secure storage.

- **Helmet security middleware**
  - Adds HTTP headers for enhanced application security.

---

# Project Architecture

> The project adopts a feature-based modular architecture, ensuring scalability, maintainability, and production readiness.

```bash
TradeFlow/
└── backend/
    ├── controllers/
    │   ├── auth.controller.js
    │   ├── orders.controller.js
    │   ├── holdings.controller.js
    │   ├── positions.controller.js
    │   ├── bids.controller.js
    │   ├── funds.controller.js
    │   └── trade.controller.js
    │
    ├── init/
    │   ├── data.js
    │   └── index.js
    │
    ├── middleware/
    │   ├── authenticate.js
    │   └── validate.js
    │
    ├── models/
    │   ├── user.model.js
    │   ├── order.model.js
    │   ├── holding.model.js
    │   ├── position.model.js
    │   ├── bid.model.js
    │   └── fund.model.js
    │
    ├── routes/
    │   ├── auth.routes.js
    │   ├── orders.routes.js
    │   ├── holdings.routes.js
    │   ├── positions.routes.js
    │   ├── bids.routes.js
    │   ├── funds.routes.js
    │   └── trade.routes.js
    │
    ├── utils/
    │   └── generateToken.js
    │
    ├── validators/
    │   ├── user.validation.js
    │   ├── order.validation.js
    │   ├── holding.validation.js
    │   ├── position.validation.js
    │   ├── bids.validation.js
    │   ├── fund.validation.js
    │   └── trade.validation.js
    │
    ├── .env
    ├── app.js
    ├── index.js
    └── package.json

└── frontend/
    ├── public/
    ├── src/
    │   ├── api.js
    │   ├── main.jsx
    │
    │   ├── app/
    │   │   ├── App.jsx
    │   │   └── router.jsx
    │
    │   ├── assets/
    │   │   └── styles/
    │   │       ├── globals.css
    │   │       ├── reset.css
    │   │       └── variables.css
    │
    │   ├── modules/
    │   │   ├── auth/
    │   │   │   └── pages/
    │   │   │       └── signup/
    │   │   │           ├── SignupPage.jsx
    │   │   │           └── components/
    │   │   │               ├── AccountOpeningStepsSection.css
    │   │   │               ├── AccountOpeningStepsSection.jsx
    │   │   │               ├── AccountTypesSection.css
    │   │   │               ├── AccountTypesSection.jsx
    │   │   │               ├── BenefitsSection.css
    │   │   │               ├── BenefitsSection.jsx
    │   │   │               ├── FaqSection.css
    │   │   │               ├── FaqSection.jsx
    │   │   │               ├── HeroSection.css
    │   │   │               ├── HeroSection.jsx
    │   │   │               ├── InvestmentOptionsSection.css
    │   │   │               └── InvestmentOptionsSection.jsx
    │   │   │
    │   │   ├── dashboard/
    │   │   │   ├── data.js
    │   │   │   ├── components/
    │   │   │   │   ├── actionWindow/
    │   │   │   │   │   ├── BuyActionWindow.css
    │   │   │   │   │   ├── BuyActionWindow.jsx
    │   │   │   │   │   ├── FundsActionWindow.css
    │   │   │   │   │   ├── FundsActionWindow.jsx
    │   │   │   │   │   └── GeneralContext.jsx
    │   │   │   │   │
    │   │   │   │   ├── header/
    │   │   │   │   │   ├── Header.css
    │   │   │   │   │   ├── Header.jsx
    │   │   │   │   │   ├── Menu.css
    │   │   │   │   │   ├── Menu.jsx
    │   │   │   │   │   ├── ProfileDropdown.css
    │   │   │   │   │   └── ProfileDropdown.jsx
    │   │   │   │   │
    │   │   │   │   ├── notFoundPage/
    │   │   │   │   │   ├── NotFoundPageDashboard.css
    │   │   │   │   │   └── NotFoundPageDashboard.jsx
    │   │   │   │   │
    │   │   │   │   ├── sidebar/
    │   │   │   │   │   ├── SidebarPage.css
    │   │   │   │   │   ├── SidebarPage.jsx
    │   │   │   │   │   ├── WatchList.css
    │   │   │   │   │   ├── WatchList.jsx
    │   │   │   │   │   ├── WatchListItems.css
    │   │   │   │   │   └── WatchListItems.jsx
    │   │   │   │   │
    │   │   │   │   └── widgets/
    │   │   │   │       ├── CustomContent.jsx
    │   │   │   │       ├── CustomTooltip.jsx
    │   │   │   │       ├── NiftyChart.jsx
    │   │   │   │       └── TreemapCard.jsx
    │   │   │   │
    │   │   │   └── pages/
    │   │   │       ├── bids/
    │   │   │       │   ├── BidsPage.jsx
    │   │   │       │   └── components/
    │   │   │       │       ├── Bids.css
    │   │   │       │       └── Bids.jsx
    │   │   │       │
    │   │   │       ├── dashboardHome/
    │   │   │       │   ├── DashboardHomePage.jsx
    │   │   │       │   └── components/
    │   │   │       │       ├── Summary.css
    │   │   │       │       └── Summary.jsx
    │   │   │       │
    │   │   │       ├── funds/
    │   │   │       │   ├── FundsPage.jsx
    │   │   │       │   └── components/
    │   │   │       │       ├── Funds.css
    │   │   │       │       └── Funds.jsx
    │   │   │       │
    │   │   │       ├── holdings/
    │   │   │       │   ├── HoldingsPage.jsx
    │   │   │       │   └── components/
    │   │   │       │       ├── Holdings.css
    │   │   │       │       └── Holdings.jsx
    │   │   │       │
    │   │   │       ├── orders/
    │   │   │       │   ├── OrdersPage.jsx
    │   │   │       │   └── components/
    │   │   │       │       ├── Orders.css
    │   │   │       │       └── Orders.jsx
    │   │   │       │
    │   │   │       └── positions/
    │   │   │           ├── PositionsPage.jsx
    │   │   │           └── components/
    │   │   │               ├── Positions.css
    │   │   │               └── Positions.jsx
    │   │   │
    │   │   └── landingPages/
    │   │       ├── about/
    │   │       │   ├── AboutPage.jsx
    │   │       │   └── components/
    │   │       │       ├── HeroSection.css
    │   │       │       ├── HeroSection.jsx
    │   │       │       ├── TeamSection.css
    │   │       │       └── TeamSection.jsx
    │   │       │
    │   │       ├── home/
    │   │       │   ├── HomePage.jsx
    │   │       │   └── components/
    │   │       │       ├── AwardsSection.css
    │   │       │       ├── AwardsSection.jsx
    │   │       │       ├── EducationSection.css
    │   │       │       ├── EducationSection.jsx
    │   │       │       ├── HeroSection.css
    │   │       │       ├── HeroSection.jsx
    │   │       │       ├── PricingSection.css
    │   │       │       ├── PricingSection.jsx
    │   │       │       ├── StatsSection.css
    │   │       │       └── StatsSection.jsx
    │   │       │
    │   │       ├── pricing/
    │   │       │   ├── PricingPage.jsx
    │   │       │   └── components/
    │   │       │       ├── BrokerageSection.css
    │   │       │       ├── BrokerageSection.jsx
    │   │       │       ├── HeroSection.css
    │   │       │       └── HeroSection.jsx
    │   │       │
    │   │       ├── product/
    │   │       │   ├── ProductPage.jsx
    │   │       │   └── components/
    │   │       │       ├── HeroSection.css
    │   │       │       ├── HeroSection.jsx
    │   │       │       ├── LeftSection.css
    │   │       │       ├── LeftSection.jsx
    │   │       │       ├── RightSection.css
    │   │       │       ├── RightSection.jsx
    │   │       │       ├── UniverseSection.css
    │   │       │       └── UniverseSection.jsx
    │   │       │
    │   │       └── support/
    │   │           ├── SupportPage.jsx
    │   │           └── components/
    │   │               ├── CreateTicketSection.css
    │   │               ├── CreateTicketSection.jsx
    │   │               ├── HeroSection.css
    │   │               └── HeroSection.jsx
    │   │
    │   │
    │   └── shared/
    │      ├── components/
    │      │   ├── footer/
    │      │   │   ├── Footer.css
    │      │   │   └── Footer.jsx
    │      │   │
    │      │   ├── header/
    │      │   │   ├── Header.css
    │      │   │   └── Header.jsx
    │      │   │
    │      │   ├── notFoundPage/
    │      │   │   ├── NotFoundPage.css
    │      │   │   └── NotFoundPage.jsx
    │      │   │
    │      │   ├── openAccount/
    │      │   │   ├── OpenAccount.css
    │      │   │   └── OpenAccount.jsx
    │      │   │
    │      │   ├── protectedRoute/
    │      │   │   └── ProtectedRoute.jsx
    │      │   │
    │      │   └── themeToggle/
    │      │       ├── ThemeToggle.css
    │      │       └── ThemeToggle.jsx
    │      │
    │      ├── context/
    │      │   ├── ThemeContext.jsx
    │      │   └── ThemeProvider.jsx
    │      │
    │      ├── hooks/
    │      │   └── useTheme.js
    │      │
    │      ├── layouts/
    │      │   ├── DashboardLayout.css
    │      │   ├── DashboardLayout.jsx
    │      │   └── MainLayout.jsx
    │      │
    │      └── meta/
    │          ├── MetaWrapper.jsx
    │          ├── PageMeta.jsx
    │          └── pageTitles.js
    │
    ├── index.html
    └── package.json

```

# API Endpoints

### Authentication

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | `/api/auth/signup` | Register a new user |
| POST   | `/api/auth/login`  | User login          |

---

### Trading

| Method | Endpoint             | Description     |
| ------ | -------------------- | --------------- |
| POST   | `/api/trade/execute` | Execute a trade |

---

#### Orders

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | `/api/orders` | Get all orders     |
| POST   | `/api/orders` | Create a new order |

#### Holdings

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | `/api/holdings` | Get all holdings  |
| POST   | `/api/holdings` | Add a new holding |

#### Positions

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | `/api/positions` | Get all positions  |
| POST   | `/api/positions` | Add a new position |

---

### Bids

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | `/api/bids`     | Get all bids       |
| POST   | `/api/bids`     | Create a new bid   |
| DELETE | `/api/bids/:id` | Delete a bid by ID |

---

### Funds

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| GET    | `/api/funds` | Get all funds  |
| POST   | `/api/funds` | Add a new fund |

<br>

> All API routes were tested using **Thunder Client**.

---

# Usage

- Users can **buy and sell assets** and manage **orders, holdings, positions, bids, and funds** in real time.
- Users can **track investment performance** with **interactive dashboards, charts, and heatmaps**.
- Users can **search and filter assets** to quickly find stocks or funds of interest.
- Users can switch between **light and dark themes** for a personalized experience.
- Secure **authentication and authorization** protect user accounts and transactions.
- Admins can **manage users and monitor transactions** to ensure platform integrity.
- Proper error handling displays **informative messages**, including a **“Page Not Found”** for invalid URLs.
- Fully **responsive UI** ensures a smooth experience across all devices.

---

# Demo User

Use the demo account below to explore the dashboard, orders, holdings, bids, and trading features without signing up:

| Credential   | Value                                                         |
| ------------ | ------------------------------------------------------------- |
| **Email**    | [`tradeflowadmin@gmail.com`](mailto:tradeflowadmin@gmail.com) |
| **Password** | `admin@123`                                                   |

---

# Local Setup for Developers

#### To set up TradeFlow locally, follow these steps:

1. Fork the repository on GitHub and clone it

   ```bash
   git clone <your-forked-repo-url>
   ```

2. Install backend dependencies

   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies

   ```bash
   cd frontend
   npm install
   ```

4. Set up environment variables

Create a `.env` file inside the **backend** folder and add:

   ```bash
    MONGO_URI=your-mongodb-connection-string
    JWT_SECRET=your-jwt-secret
  ```

> `JWT_SECRET` can be any random string used to sign authentication tokens.

Create a `.env` file inside the **frontend** folder and add:
 
 ```bash
  VITE_API_URL=http://localhost:8080
  ```
> This connects the frontend to your local backend server.

5. Start the development servers

Backend:

   ```bash
    cd backend
    npm run dev
  ```

Frontend:

  ```bash
    cd frontend
    npm run dev
  ```

> Both servers run in development mode. The frontend port may vary depending on your system.

6. Visit the application

Open the URL displayed in the terminal (usually `http://localhost:5173`) in your browser to use the frontend.

---

# Testing

TradeFlow includes unit tests for critical UI components using **Vitest** and **React Testing Library**.

Currently, the **Signup Page** functionality is tested to ensure:

- The signup form renders correctly
- All input fields appear
- Users can type into fields
- The signup button exists
- API calls are triggered correctly
- Error messages appear when signup fails

### Run Tests

  ```bash
    cd frontend
    npm run test
  ```

### Test Results

The tests for the **Signup Page** ran successfully, confirming the expected behavior of the **form components**, **API integration**, and **error handling**.

<p align="center">
  <img src="https://res.cloudinary.com/dhcllqvkz/image/upload/v1772901092/Testing_result_dljyqd.png" alt="Signup Page Test Results" width="750">
</p>
<br>

> All tests passed successfully, ensuring that the **Signup Page** is reliable and functions as intended.

---

# Developer

| Developed by         | LinkedIn                                                 | GitHub                                         |
| -------------------- | -------------------------------------------------------- | ---------------------------------------------- |
| **Harshal Waghmare** | [LinkedIn](https://www.linkedin.com/in/harshalwaghmare/) | [GitHub](https://github.com/harshalWaghmare89) |
