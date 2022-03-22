
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { auth } from './Firebase';

import Dashboard from './Pages/Dashboard/Dashboard';
import Posts from './Pages/Posts/Posts';
import User from './Pages/User/User';


function App() {
  const userdetails = useSelector((state) => state.authUser.user)
  console.log("userdetails", userdetails);

  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    try {
      onAuthStateChanged(auth, user => {
        if (user) {
          setIsUser(true);


        }
        else {

          setIsUser(false);
        }
      })
    } catch (error) {

    }
  }, [])

  return (

    <div className="App">
      <Header />
      <Row >
        <Col lg={2} sm={4} className="sidebar-container  shadow-lg" >
          <Sidebar />
        </Col>

        <Col lg={10} sm={8} className='main-container  ms-auto p-4'>
          <BrowserRouter>
            <Routes>
              <Route path="/dashboard" element={isUser ? <Dashboard /> : null}></Route>
              <Route path="/users" element={<User />}></Route>
              <Route path="/Posts" element={<Posts />}></Route>
            </Routes>
          </BrowserRouter>
        </Col>

      </Row>

    </div>
  );
}

export default App;
