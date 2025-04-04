import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer.jsx'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
