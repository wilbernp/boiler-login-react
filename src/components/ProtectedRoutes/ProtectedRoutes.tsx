import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes({ isAuth }: any) {
    return (
        <>
            {isAuth ? <Outlet /> : <Navigate to="auth/login" replace />}
        </>
    )
}
