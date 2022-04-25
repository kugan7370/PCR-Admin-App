
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { userLogin } from './features/Actions/AuthActions';
import { auth } from './Firebase';
import PrivateRoute from './HOC/PrivateRoute';

import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Posts from './Pages/Posts/Posts';
import User from './Pages/User/User';


function App() {
  const dispatch = useDispatch()
  const isUser = useSelector((state) => state.authUser.authendication)





  return (

    <div className="App">
      <Header />

      <Row >
        {isUser &&
          <Col lg={2} sm={4} className="sidebar-container shadow-lg" >
            <Sidebar />
          </Col>}

        <Col lg={isUser ? 10 : 12} sm={isUser ? 8 : 12} className='main-container  ms-auto p-4'>

          <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
            <Route path="/users" element={<PrivateRoute><User /></PrivateRoute>}></Route>
            <Route path="/Posts" element={<PrivateRoute><Posts /></PrivateRoute>}></Route>
          </Routes>

        </Col>

      </Row>

    </div>
  );
}

export default App;
