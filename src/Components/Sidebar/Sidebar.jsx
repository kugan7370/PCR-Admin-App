import { AccountBox, Dashboard, ExitToApp, Group, MenuBook } from '@material-ui/icons'
import React from 'react'
import { Nav } from 'react-bootstrap'
import './Sidebar.css'
export default function Sidebar() {
    return (
        <div className='sidebar p-3'>
            <Nav defaultActiveKey="/home" className="flex-column text-black">
                <Nav.Link className="mb-5 d-flex align-items-center  border text-black active " href="/dashboard">
                    <Dashboard className=' fs-5 me-2 ' />
                    <h6 className='mt-2  '>Dashboard</h6>
                </Nav.Link>

                <Nav.Link className="d-flex align-items-center text-black" href="/Posts">
                    <MenuBook className=' fs-5 me-2' />
                    <h6 className='mt-2'>Posts</h6>
                </Nav.Link>
                <Nav.Link className="d-flex align-items-center text-black " href="/users">
                    <Group className=' fs-5 me-2' />
                    <h6 className='mt-2'>Users</h6>
                </Nav.Link>
                <Nav.Link className="d-flex align-items-center text-black mb-5" href="/Profile">
                    <AccountBox className=' fs-5 me-2' />
                    <h6 className='mt-2'>Profile</h6>
                </Nav.Link>

                <Nav.Link className="d-flex align-items-center text-black mt-5 " href="/Logout">
                    <ExitToApp className=' fs-5 me-2' />
                    <h6 className='mt-2'>Logout</h6>
                </Nav.Link>

            </Nav>
        </div>
    )
}
