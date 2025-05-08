import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Config from "../pages/Config";
import Support from "../pages/Support";
import Wallet from "../pages/Wallet";
import { useTranslation } from "react-i18next";

export default function AppRoutes() {
  const { i18n } = useTranslation();

  return (
    <Routes key={i18n.language}>  {/* Adicionando key para forçar re-renderização */}
      <Route path="/" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Settings" element={<Config />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  );
}
