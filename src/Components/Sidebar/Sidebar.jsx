import { AccountBox, Dashboard, ExitToApp, Group, MenuBook } from '@material-ui/icons'
import { signOut } from 'firebase/auth'
import React from 'react'
import { Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { auth } from '../../Firebase'
import './Sidebar.css'
export default function Sidebar() {


    const userSignout = () => {
        signOut(auth);
    }
    return (
        <div className='sidebar p-4'>
            <Nav defaultActiveKey="/home" className="flex-column text-black">
                <Link className="mb-5 d-flex align-items-center   text-black active text-decoration-none " to="/dashboard">
                    <Dashboard className=' fs-5 me-2 ' />
                    <h6 className='mt-2  '>Dashboard</h6>
                </Link>

                <Link className="d-flex align-items-center text-black mb-2   text-decoration-none" to="/Posts">
                    <MenuBook className=' fs-5 me-2' />
                    <h6 className='mt-2'>Posts</h6>
                </Link>

                <Link to="/users" className="d-flex align-items-center mb-2 text-black text-decoration-none ">
                    <Group className=' fs-5 me-2' />
                    <h6 className='mt-2'>Users</h6>
                </Link>

                <Link className="d-flex align-items-center text-black  mb-5 text-decoration-none" to="/Profile">
                    <AccountBox className=' fs-5 me-2' />
                    <h6 className='mt-2'>Profile</h6>
                </Link>

                <Nav.Link className="d-flex align-items-center text-black mt-5 text-decoration-none p-0" href="/" >
                    <ExitToApp className=' fs-5 me-2' />
                    <h6 className='mt-2' onClick={userSignout}>Logout</h6>
                </Nav.Link>

            </Nav>
        </div>
    )
}
