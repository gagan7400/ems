import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className='d-flex w-100 h-100 '>
            <div className="sidebar  bg-primary w-25 p-5" style={{ height: "100vh" }}>
                <div> <NavLink className="h1 text-decoration-none" to="/dashboard">  Sidebar  </NavLink> </div>
                <div className='d-flex  flex-column gap-5'>
                    <NavLink to="/dashboard/createemp" className=' btn btn-info'> Create Emp </NavLink>
                    <NavLink to="/dashboard/emplist" className=' btn btn-info'> Employee List  </NavLink>
                    <NavLink to="/dashboard/createtask" className=' btn btn-info'> Create Task   </NavLink>
                </div>

            </div>
            <div className="main w-75  " style={{ height: "100vh", overflow: "auto" }}>
                <Outlet />
            </div>
        </div>
    )
}
