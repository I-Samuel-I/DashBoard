import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Config from "../pages/Config";
import Support from "../pages/Support";
import Wallet from "../pages/Wallet";
import Transactions from "../pages/Transactions";

export default function AppRoutes() {
  const location = useLocation(); 

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Settings" element={<Config />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/Transactions" element={<Transactions />} />
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  );
}
