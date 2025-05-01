import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Config from "../pages/Config";
import Support from "../pages/Support";
import Wallet from "../pages/Wallet";

export default  function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Dashboard" element={<Dashboard/>} />
                <Route path="/Settings" element={<Config/>}/>
                <Route path="/Support" element={<Support/>}/>
                <Route path="/Wallet" element={<Wallet/>}/>
                <Route path="*" element={<h1>404 - Not Found</h1>} />
            </Routes>
        </Router>
    )

}