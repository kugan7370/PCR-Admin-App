import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './Home.css'




function Home() {
    const users = useSelector((state) => state.authUser);
    if (users.authendication) {
        return <Navigate to={'/dashboard'} />
    }

    return (
        <main className='main-home'>
            <div className="container ">
                <Row>
                    <Col lg={3}>
                        <img className=' img-fluid' src="../Images/Screenshot_20220406-234113_Expo Go.jpg" alt="" srcset="" />
                    </Col>

                    <Col lg={3}>
                        <img className=' img-fluid' src="../Images/Screenshot_20220406-234120_Expo Go.jpg" alt="" srcset="" />
                    </Col>
                    <Col lg={3}>
                        <img className=' img-fluid' src="../Images/Screenshot_20220406-234127_Expo Go.jpg" alt="" srcset="" />
                    </Col>
                    <Col lg={3}>
                        <img className=' img-fluid' src="../Images/Screenshot_20220406-234137_Expo Go.jpg" alt="" srcset="" />
                    </Col>

                </Row>

            </div>




        </main>

    )
}

export default Home