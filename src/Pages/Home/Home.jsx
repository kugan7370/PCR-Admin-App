import React from 'react'
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
            <div className="container">
                <header className="pb-3 mb-4  border-bottom">
                    <h3 className="text-center">Welcome </h3>
                </header>

                <div className="p-5  bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>

                    </div>
                </div>


            </div>
        </main>

    )
}

export default Home