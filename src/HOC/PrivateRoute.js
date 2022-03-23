import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const users = useSelector((state) => state.authUser);
    if (!users.authendication) {
        return <Navigate to={'/'} />
    }

    return children;


}
