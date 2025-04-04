import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ Component }) {
    let user = localStorage.getItem("token");
    if (user) {

    } else {
        return <Navigate to="/login" />
    }
    return (
        <div>
            {Component}
        </div>
    )
}
