import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/Login/Signup';
import Signin from './Components/Login/Signin';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import Header from './Components/Dashboard/Header'
import Sidebar from './Components/Dashboard/Sidebar';
import Approved from './Components/SidebarList/approved'
import Customers from './Components/SidebarList/customers'
import Inventory from './Components/SidebarList/inventory'
import Orders from './Components/SidebarList/orders'
import Medicine from './Components/SidebarList/medicine'
import Rejected from './Components/SidebarList/rejected'
import Logout from './Components/SidebarList/logout'


function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
   setOpenSidebarToggle(!openSidebarToggle)

}
  
  return (
    
    
        <Router>
            <div className="grid-container">
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Home/*" element={<AuthenticatedRoutes />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/approved" element={<Approved />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/rejected" element={<Rejected />} />
          </Routes>
      
            </div>
        </Router>
    
  
  );
}

export default App;













 