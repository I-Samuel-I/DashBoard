import { Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Config from "../pages/Config";
import Support from "../pages/Support";
import Wallet from "../pages/Wallet";
import Transactions from "../pages/Transactions";
import Error from "../pages/Error";

export default function AppRoutes() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Settings" element={<Config />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/Transactions" element={<Transactions />} />
      <Route path="*" element={<Error/>} />
    </Routes>
  );
}
