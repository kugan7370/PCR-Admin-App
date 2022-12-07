import {
  AccountBox,
  Dashboard,
  ExitToApp,
  Group,
  MenuBook,
} from "@material-ui/icons";
import { signOut } from "firebase/auth";
import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../Firebase";
import "./Sidebar.css";
export default function Sidebar() {
  const userData = useSelector((state) => state.authUser.user);

  const userSignout = () => {
    signOut(auth);
  };
  return (
    <div className="sidebar  p-4">
      <div className="profile-details  align-items-center d-flex flex-column mb-5">
        <img
          src={userData.pro_pic}
          className="pro-image rounded-circle"
          alt=""
        />
        <span className="mt-1">{userData.username}</span>
      </div>
      <Nav defaultActiveKey="/home" className="flex-column text-white">
        <Link
          className="d-flex align-items-center text-white mb-2 text-decoration-none "
          to="/dashboard"
        >
          <Dashboard className=" fs-5 me-2  " />
          <h6 className="mt-2 active">Dashboard</h6>
        </Link>

        <Link
          className="d-flex align-items-center text-white mb-2   text-decoration-none"
          to="/Posts"
        >
          <MenuBook className=" fs-5 me-2" />
          <h6 className="mt-2">Posts</h6>
        </Link>

        <Link
          to="/users"
          className="d-flex align-items-center mb-5 text-white text-decoration-none "
        >
          <Group className=" fs-5 me-2" />
          <h6 className="mt-2">Users</h6>
        </Link>
        <Link
          to="/users"
          className="d-flex align-items-center mb-2  text-white text-decoration-none imageContainer "
        >
          {/* <Group className=" fs-5 me-2" /> */}
          <img
            src="./images/Data1.png"
            className="rounded-circle   img-fluid"
            alt=""
          />
        </Link>

        {/* <Link className="d-flex align-items-center text-white  mb-5 text-decoration-none" to="/Profile">
                    <AccountBox className=' fs-5 me-2' />
                    <h6 className='mt-2'>Profile</h6>
                </Link> */}

        <Nav.Link
          className="d-flex align-items-center text-white mt-4  text-decoration-none p-0"
          href="/"
        >
          <ExitToApp className=" fs-5 me-2" />
          <h6 className="mt-2" onClick={userSignout}>
            Logout
          </h6>
        </Nav.Link>
      </Nav>
    </div>
  );
}
