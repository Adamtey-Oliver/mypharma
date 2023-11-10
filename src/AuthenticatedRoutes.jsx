import { useState } from 'react'
import './App.css' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Dashboard/Home'
import Orders from './Components/SidebarList/orders';
import Approved from './Components/SidebarList/approved';
import Logout from './Components/SidebarList/logout';
import Medicine from './Components/SidebarList/medicine';
import Inventory from './Components/SidebarList/inventory';
import Rejected from './Components/SidebarList/rejected';
import Customers from './Components/SidebarList/customers';



function AuthenticatedRoutes() {
  

  return (
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/approved" element={<Approved />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/rejected" element={<Rejected />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
  );
}

export default AuthenticatedRoutes;
