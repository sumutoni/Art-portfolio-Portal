import { BrowserRouter, Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { FiActivity, FiBox, FiClipboard, FiGrid, FiImage, FiMessageSquare, FiSettings, FiShoppingBag, FiUsers } from "react-icons/fi";
import DashboardPage from "./pages/DashboardPage.jsx";
import OrdersSalesPage from "./pages/OrdersSalesPage.jsx";
import ArtworksPage from "./pages/ArtworksPage.jsx";

const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: FiGrid },
  { label: "Artworks", to: "/artworks", icon: FiImage },
  { label: "Categories", to: "#", icon: FiBox },
  { label: "Exhibitions", to: "#", icon: FiActivity },
  { label: "Orders & Payments", to: "/orders-sales", icon: FiShoppingBag },
  { label: "Customers", to: "#", icon: FiUsers },
  { label: "Inquiries", to: "#", icon: FiMessageSquare },
  { label: "Website Content", to: "#", icon: FiClipboard },
  { label: "Media Library", to: "#", icon: FiImage },
  { label: "Users", to: "#", icon: FiUsers },
  { label: "Settings", to: "#", icon: FiSettings }
];

function Sidebar({ pathname }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <h1>DENIS MPABUKA</h1>
        <p>ADMIN PORTAL</p>
      </div>
      <nav className="nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.to ||
            (item.to === "/orders-sales" && pathname.startsWith("/orders-sales")) ||
            (item.to === "/artworks" && pathname.startsWith("/artworks"));
          if (item.to === "#") {
            return (
              <span key={item.label} className="nav-item disabled">
                <Icon size={17} />
                <span>{item.label}</span>
              </span>
            );
          }
          return (
            <NavLink key={item.label} to={item.to} className={`nav-item ${active ? "active" : ""}`}>
              <Icon size={17} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="profile-card">
        <div className="avatar">DM</div>
        <div>
          <strong>Denis Mpabuka</strong>
          <p>Administrator</p>
        </div>
      </div>
    </aside>
  );
}

function AppFrame({ children }) {
  const { pathname } = useLocation();
  return (
    <div className="admin-root">
      <Sidebar pathname={pathname} />
      <main className="admin-main">{children}</main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppFrame>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/orders-sales" element={<OrdersSalesPage />} />
          <Route path="/artworks" element={<ArtworksPage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AppFrame>
    </BrowserRouter>
  );
}

export default App;
