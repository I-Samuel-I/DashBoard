import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Config from "../pages/Config";
import Support from "../pages/Support";

export default  function AppRoutes() {
    return(
        <Router>
            {/* <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">DashBoard</Link>
                </li>
            </ul> */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="settings" element={<Config/>}/>
                <Route path="Support" element={<Support/>}/>
            </Routes>
        </Router>
    )

}