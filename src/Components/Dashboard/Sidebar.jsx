import React from 'react'
import { Link } from 'react-router-dom';
import 
{BsHospitalFill, BsPersonCheckFill, BsCheck2All, BsArchiveFill, BsPeopleFill, 
  BsListCheck, BsFileMedicalFill, BsBoxArrowRight , Bs5CircleFill}
 from 'react-icons/bs'


 function Sidebar({ openSidebarToggle, OpenSidebar }) {
   return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsHospitalFill className='icon_header' /> Pharmacy Shop
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                
                <li className='sidebar-list-item'>
                    <Link to="/home" className='admin'>
                        <BsPersonCheckFill className='icon' /> Admin 
                    </Link>
                </li>
                

                <li className='sidebar-list-item'>
                    <Link to="/customers">
                        <BsPeopleFill className='icon'/> Customers
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/inventory">
                        <BsListCheck className='icon'/> Inventory
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/medicine">
                        <BsFileMedicalFill className='icon'/> List of Medicine
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/orders">
                        <Bs5CircleFill className='icon'/> Orders
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/approved">
                        <BsCheck2All className='icon' /> Approved Medicine
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/rejected">
                        <BsArchiveFill className='icon' /> Rejected Medicine
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/logout" className="logout">
                        <BsBoxArrowRight  className='icon'/> Logout
                    </Link>
                </li>
            </ul>
        </aside>
   )
 }
 
 export default Sidebar;
